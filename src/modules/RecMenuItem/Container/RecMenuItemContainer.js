import { Text, View } from 'react-native'

import React from 'react'
import RecMenuItemComponent from '../Component/RecMenuItemComponent'

const RecMenuItemContainer = (props) => {
    const handleBack = () => {
        props.navigation.goBack();
    }
    
    return (
        <RecMenuItemComponent {...props}
        handleBack={handleBack}
        />
    )
}

export default RecMenuItemContainer
