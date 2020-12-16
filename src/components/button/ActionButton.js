import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../app/styles/colors'

const ActionButton = (props) => {
    const {onPress, title, disabled} = props
    return (
        <TouchableOpacity style={styles.wrapper.component} onPress={onPress} disabled={disabled} >
            <Text style={styles.text.title}> {title} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper : {
        component: {
            marginTop: 35,
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 10,
            backgroundColor: colors.default,
        },
    },
    text: {
        title: {
            color: '#ffffff',
            textAlign: 'center'
        },
    },
}

export default ActionButton
