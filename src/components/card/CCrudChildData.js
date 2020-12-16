import { StyleSheet, Text, View } from 'react-native'
import { SvgDelete, SvgUpdate } from '../svg';

import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../app/styles/colors';

const CCrudChildData = (props) => {
    const {handleUpdate, name, dob, gender, handleDeleted} = props;

    return (
        <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.childData}>
                <Text style={styles.textName}> {name} </Text>
                <Text style={styles.textDob}>Tanggal Lahir : {dob} </Text>
                <Text style={styles.textGender}>Jenis Kelamin : {gender} </Text>
            </View>
            <View style={{flexDirection: 'column', marginHorizontal: 10 }}>
                <TouchableOpacity style={styles.buttonAction}  onPress={handleUpdate}>
                    <SvgUpdate />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonActionDeleted} onPress={handleDeleted} >
                    <SvgDelete />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CCrudChildData

const styles = StyleSheet.create({
    
    childData: {
        borderWidth : 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.default,
        width: '80%'
    },
    textName: {
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    textDob: {
        fontWeight: 'normal',
        color: 'black',
        marginBottom: 10
    },
    textGender: {
        fontWeight: 'normal',
        color: 'black',
        marginBottom: 10
    },
    buttonAction: {
        borderWidth : 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: colors.default
    },
    buttonActionDeleted : {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: colors.default,
        marginTop: 10
    }
})