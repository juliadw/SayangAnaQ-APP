import CountMenuComponent from '../Component/CountMenuComponent'
import React from 'react'

const CountMenuContainer = (props) => {
    const handleChangeCountWeight = () => {
        props.navigation.navigate('CountNutritionByWeight')
    }

    const handleChangeCountHeight = () => {
        props.navigation.navigate('CountNutritionByHeight')
    }

    const handleChangeCountIndex = () => {
        props.navigation.navigate('CountNutritionByIndex')
    }

    const handleBack = () => {
        props.navigation.goBack()
    }
    
    return (
        <CountMenuComponent {...props} 
        handleChangeCountWeight={handleChangeCountWeight}
        handleChangeCountHeight={handleChangeCountHeight}
        handleChangeCountIndex={handleChangeCountIndex}
        handleBack={handleBack}
        />
    )
}

export default CountMenuContainer
