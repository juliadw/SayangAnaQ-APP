import { TextInput, View } from 'react-native'

import React from 'react'
import { colors } from '../../app/styles/colors'

const inputForm = (props) => {
    
    const { value, placeholder='placeholder', onChangeText, secureTextEntry, keyboardType, onEndEditing } = props
    
    return (
        <View  >
             <TextInput 
                // {...input}
                placeholder={placeholder} 
                value={value} 
                onChangeText={text => onChangeText(text)}
   
                secureTextEntry = {secureTextEntry}
                keyboardType={keyboardType}
                onEndEditing={onEndEditing}
                // onBlur={input.onBlur}
                // onFocus={input.onFocus}
            />
        </View>
    )
}

const styles = {
        textInput: {
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colors.default,
            paddingVertical: 3,
            paddingHorizontal: 15
    },
}

export default inputForm;
