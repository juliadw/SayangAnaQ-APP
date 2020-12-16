import { StyleSheet, Text, View } from 'react-native'

import ActionButton from '../../../components/button/ActionButton';
import { Header } from '../../../components/header';
import { InputForm } from '../../../components/input';
import React from 'react'
import { colors } from '../../../app/styles/colors';

const UpdateChildDataComponent = (props ) => {
    const {
        handleBack,
        datePicker,
        handleUpdateData,
        onInputChange,
        valueName,
        dropdownGender
    } = props;
    
    return (
        <View style={styles.container}> 
            <View style={styles.wraper}>
            <Header onPress ={handleBack} headerTitle='Update Data Anak' />
                <View>
                    <Text style={styles.inputTextDesc}>Nama Lengkap Si Kecil</Text>
                    <View style={styles.viewTextInput}>
                        <InputForm 
                            placeholder="Nama lengkap"
                            value={valueName}
                            onChangeText={onInputChange}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTextDesc}>Tanggal Lahir Si Kecil</Text>
                    <View style={styles.datePicker}>
                        {datePicker}
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTextDesc}>Jenis Kelamin Si Kecil</Text>
                    <View style={styles.viewTextInput}>
                        {dropdownGender}
                       
                    </View> 
                </View>
                <View  style={styles.buttonAction} >
                    <ActionButton onPress={handleUpdateData} title = 'Update'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wraper: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    inputTextDesc: {
        marginTop: 25
    },
    buttonAction: {
        alignSelf: 'flex-end',
        width: '40%',
    },
    datePicker: {
        borderWidth: 1, 
        borderColor: colors.default, 
        borderRadius: 10, 
        padding: 10,
        marginTop: 10
    },
    viewTextInput:{
        marginTop: 10, 
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.default,
        paddingHorizontal: 10
    }
})

export default UpdateChildDataComponent
