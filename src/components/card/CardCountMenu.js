import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../app/styles/colors'

const CardCountMenu = (props) => {
    const{titleCard, onPress} = props;
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.titleCard}>{titleCard}</Text>
        </TouchableOpacity>
    )
}

export default CardCountMenu

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity:  0.30,
        shadowOffset: { width: 0, height: 3},
        elevation: 8,
        backgroundColor: colors.white
    },
    titleCard: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    }
})
