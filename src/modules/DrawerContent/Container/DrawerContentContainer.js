import DrawerContentComponent from '../../DrawerContent/Component/DrawerContentComponent';
import React from 'react'

const DrawerContentContainer = (props) => {
    const handleExit = () => {
        props.navigation.navigate('Login')
    }
    
    return (
        
        <DrawerContentComponent
            handleExit = {handleExit}
        />
    )
}

export default DrawerContentContainer
