import { TextInput, View } from 'react-native'

import React from 'react'
import { colors } from '../../app/styles/colors'

const InputFormBottom = (props) => {
    
    const { value, placeholder='placeholder', onChangeText, secureTextEntry, keyboardType } = props
    
    return (
        <View>
             <TextInput 
                // {...input}
                placeholder={placeholder} 
                value={value} 
                onChangeText={text => onChangeText(text)}
                style={styles.textInput} 
                secureTextEntry = {secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = {
    textInput: {
        borderBottomColor: colors.default, 
        borderBottomWidth: 1
    },
}

export default InputFormBottom;
