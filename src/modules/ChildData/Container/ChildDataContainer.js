import * as ChildDataAction from '../Stores/Actions/ChildDataAction';

import React, { useEffect } from 'react'

import { Alert } from 'react-native';
import CCrudChildData from '../../../components/card/CCrudChildData';
import ChildDataComponent from '../Component/ChildDataComponent'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const ChildDataContainer = (props) => {
    const {listData, actionChildData} = props;
    
    const handleOnPresBack = () => {
        props.navigation.goBack()
    }
    const handleAdd = () => {
        props.navigation.navigate('AddChildData')
    }

    const handleDeleted = (id) => {
        actionChildData.deleteChildDataId(id)
    }
    
    useEffect(() => {
        actionChildData.getChildData()
     }, [])

     const renderItem = ({item}) => {
        return (
            <CCrudChildData
                key={item.id}
                name={item.name}
                dob={item.dob}
                gender={item.gender}
                handleUpdate={() => props.navigation.navigate('UpdateChildData',
                    {
                        id:item.id,
                        nameValue:item.name,
                        dobValue:item.dob,
                        genderValue:item.gender
                    }
                )}
                handleDeleted={() => Alert.alert(
                    'PERINGATAN!', 
                    'Anda Yakin akan menghapus Data ini?', 
                    [
                        {
                            text:'Tidak', 
                            onPress: () => console.log('button tidak')
                        },
                        {
                            text:'Ya', 
                            onPress: () => handleDeleted(item)
                        }
                    ]
                )}
            />
        )
    }

    return (
        <ChildDataComponent
            handleBack={handleOnPresBack}
            handleAdd={handleAdd}
            handleDeleted={handleDeleted}
            renderItem={renderItem}
            listData={listData}
        />
    )
}

const mapStateToProps = state => ({
    listData: state.ChildDataReducer
});

const mapDispatchToProps = (dispatch) => ({
    actionChildData: bindActionCreators(ChildDataAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildDataContainer)
