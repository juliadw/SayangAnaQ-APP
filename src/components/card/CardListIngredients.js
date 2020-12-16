import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { colors } from '../../app/styles/colors'

const CardListIngredients = (props) => {
    const{ingredients, calories, fat, protein, carbo} = props;
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}> {ingredients} </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Kalori </Text>
                <Text style={styles.contentNutrition}> {calories} kiloKalori </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Karbohidrat </Text>
                <Text style={styles.contentNutrition}> {carbo} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Lemak </Text>
                <Text style={styles.contentNutrition}> {fat} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Protein </Text>
                <Text style={styles.contentNutrition}> {protein} gram </Text>
            </View>
        </View>
    )
}

export default CardListIngredients;

const styles = StyleSheet.create({
    container :{
        paddingVertical: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity:  0.30,
        shadowOffset: { width: 0, height: 3},
        elevation: 8,
        backgroundColor: colors.white
    },
    title:{
        alignSelf: 'center', 
        paddingBottom: 10, 
        borderBottomWidth: 1, 
        width: '70%',  
        borderBottomColor: colors.default, 
        marginBottom: 10 
    },
    textTitle: {
        textAlign: 'center', 
        fontWeight:'bold', 
        fontSize: 16,
        color: colors.default
    },
    nutrition: {
        flexDirection: 'row', 
        justifyContent:'space-between',
         marginHorizontal: 20, 
        paddingVertical: 4
    },
    contentNutrition: {
        color: colors.greyPrimary
    }
})
