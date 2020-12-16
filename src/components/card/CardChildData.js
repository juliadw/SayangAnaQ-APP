import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../app/styles/colors'

const CardChildData = (props) => {
    const{name, dob, gender, onPress} = props;
    return (
        <TouchableOpacity style={styles.childData} onPress={onPress}>
            <Text style={styles.textName}>{name}</Text>
            <View style={styles.context}>
                <Text>Tanggal Lahir</Text>
                <Text style={styles.fontContext}>{dob}</Text>
            </View>
            <View style={styles.context}>
                <Text>Jenis Kelamin</Text>
                <Text style={styles.fontContext}> {gender} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardChildData

const styles = StyleSheet.create({
    childData: {
        borderWidth : 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.default,
        width: '100%',
        marginTop: 20
    },
    textName: {
        fontWeight: 'bold',
        color: colors.default,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    context: {
        flexDirection: 'row', 
        justifyContent:  'space-between',
        paddingVertical: 4,
    },
    fontContext: {
        color:colors.greySecondary
    }
})
