import { StyleSheet, Text, View } from 'react-native'

import FigureNutrionalNeedsComponent from '../Component/FigureNutrionalNeedsComponent'
import React from 'react'

export default function FigureNutrionalNeedsContainer(props) {
    const handleBack = () => {
        props.navigation.goBack()
    }
    return (
        <FigureNutrionalNeedsComponent
            {...props}
            handleBack={handleBack}
        />
    )
}

const styles = StyleSheet.create({})
