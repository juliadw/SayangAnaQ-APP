import * as ChildDataAction from '../Stores/Actions/ChildDataAction';

import { Alert, Picker, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';

import {API_APP_URL} from '@env';
import AddChildDataComponent from '../Component/AddChildDataComponent';
import Axios from 'axios';
import MyDatePicker from '../../../components/datePicker/DatePicker';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const AddChildDataContainer = (props) => {
    const {actionChildData} = props
    const [name, setName] = useState("");
    const [gender, setSelectedValue] = useState('Laki Laki');
    const [age, setAge] = useState(0)

    const handleBack = () => {
        props.navigation.goBack()
    }

    const handleSubmitAddData = async () => {
        const data = {
            name,
            dob,
            gender
        }
        if (name !== ''){
            try {
                const res = await Axios.post(
                    `${API_APP_URL}/childData`, 
                    data
                )
                console.log('res: ', res.data);
                if ( res.status == 201) {
                    actionChildData.getChildData()
                    props.navigation.navigate('ChildData')
                    ToastAndroid.show('Sukses', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Gagal', ToastAndroid.SHORT);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert('Lengkapi Form Ya Bund!');
        }
    }
    
      const [dob, setDate] = useState('');
      const dateCurrent = () => {
          const date = new Date().getDate();
          const month = new Date().getMonth() + 1;
          const year = new Date().getFullYear(); 
          setDate(
              date + '/' + month + '/' + year 
          )
      }   
      
      useEffect(() => {
          dateCurrent()
        //   getAge()
      }, [])


    return (
        <AddChildDataComponent 
            {...props}
            handleBack = {handleBack}
            handleSubmitAddData = {handleSubmitAddData}
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

export default connect(null, mapDispatchToProps)(AddChildDataContainer)


