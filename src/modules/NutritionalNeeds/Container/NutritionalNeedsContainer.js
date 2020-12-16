import NutritionalNeedsComponent from '../Component/NutritionalNeedsComponent'
import React from 'react'

const NutritionalNeedsContainer = (props) => {
    const handleOnPressFigureNutrionalNeeds = () => {
        props.navigation.navigate('FigureNutritionalNeeds')
    }
    const handleBack = () => {
        props.navigation.goBack()
    }
    
    return (
        <NutritionalNeedsComponent
            {...props}
            handleBack={handleBack}
            handleOnPressFigureNutrionalNeeds={handleOnPressFigureNutrionalNeeds}
        />
    )
}

export default NutritionalNeedsContainer
