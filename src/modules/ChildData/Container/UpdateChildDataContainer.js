import * as ChildDataAction from '../Stores/Actions/ChildDataAction';

import { Alert, Picker, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';

import {API_APP_URL} from '@env';
import Axios from 'axios';
import MyDatePicker from '../../../components/datePicker/DatePicker';
import UpdateChildDataComponent from '../Component/UpdateChildDataComponent';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const UpdateChildDataContainer = (props) => {
    const getChildData = (type) => {
        if(props.route.params){
            console.log(props.route.params);
            switch(type) {
                case "name":
                    return props.route.params.nameValue
                case "dob":
                    return props.route.params.dobValue
                case "gender":
                    return props.route.params.genderValue
                }
            }
            return ""
        }
        
    const {actionChildData} = props;
    const [name, setName] = useState(getChildData("name"));
    const [gender, setSelectedValue] = useState(getChildData("gender"));
    const [dob, setDate] = useState(getChildData("dob"));
    const [selectedUser, setSelectedUser] = useState({
        id: props.route.params.id,
        name, 
        dob, 
        gender
    });

    const handleBack = () => {
        props.navigation.goBack()
    }

    const handleUpdateData = async () => {
            const data = {
                id: props.route.params.id,
                name: name,
                dob: dob,
                gender: gender
            }
            try {
                const res = await Axios.put(
                    `${API_APP_URL}/childData/${selectedUser.id}`, 
                    data
                )
                console.log('res: ', res.data);
                if ( res.status == 200) {
                    actionChildData.getChildData()
                    props.navigation.navigate('ChildData')
                    ToastAndroid.show('Sukses', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Gagal', ToastAndroid.SHORT);
                }
            } catch (error) {
                console.log(error);
            }
        }

      useEffect(() => {
          dob
      }, [])

    return (
        <UpdateChildDataComponent
            {...props}
            handleBack = {handleBack}
            handleUpdateData = { () => Alert.alert(
                'PERINGATAN!', 
                'Simpan Perubahan Bund?', 
                [
                    {
                        text:'Tidak', 
                        onPress: () => console.log('button tidak')
                    },
                    {
                        text:'Ya', 
                        onPress: () => handleUpdateData()
                    }
                ]
            )}
            onInputChange={(value)=> setName(value)}
            valueName={name}
            datePicker={
                <MyDatePicker
                date={dob}
                onDateChange={(date) => setDate(date)}
                /> 
            }
            dropdownGender={
                <Picker
                mode="dropdown"
                selectedValue={gender}
                style={{ height: 45, borderRadius:10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue, itemIndex)}
                >
                    <Picker.Item label="Laki Laki" value="Laki Laki" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            }
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    actionChildData: bindActionCreators(ChildDataAction, dispatch)
});

export default connect(null, mapDispatchToProps)(UpdateChildDataContainer)