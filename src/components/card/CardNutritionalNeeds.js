import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { colors } from '../../app/styles/colors'

export const CardNutritionalNeedsMikro = (props) => {
    const {vitA, vitC, vitD, vitE, vitK,vitB12, kalium, kalsium, fosfor, besi, sodium, seng, natrium} = props
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}> Vitamin </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Vitamin A </Text>
                <Text style={styles.contentNutrition}> {vitA} mcg </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Vitamin D </Text>
                <Text style={styles.contentNutrition}> {vitD} mcg </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Vitamin E </Text>
                <Text style={styles.contentNutrition}> {vitE} mcg </Text>
            </View>
            <View style={styles.nutrition}>
                <Text> Vitamin K </Text>
                <Text style={styles.contentNutrition}> {vitK} mcg </Text>
            </View>
            <View style={styles.nutrition}>
                <Text> Vitamin B12 </Text>
                <Text style={styles.contentNutrition}> {vitB12} mcg </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Vitamin C </Text>
                <Text style={styles.contentNutrition}> {vitC} mg </Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.textTitle}> Mineral </Text>
            </View>
            <View>
                <View style={styles.nutrition}>
                    <Text>Kalsium</Text>
                    <Text style={styles.contentNutrition}> {kalsium} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Fosfor</Text>
                    <Text style={styles.contentNutrition}> {fosfor} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Natrium</Text>
                    <Text style={styles.contentNutrition}> {natrium} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Kalium</Text>
                    <Text style={styles.contentNutrition}> {kalium} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Besi</Text>
                    <Text style={styles.contentNutrition}> {besi} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Sodium</Text>
                    <Text style={styles.contentNutrition}> {sodium} mcg </Text>
                </View>
                <View style={styles.nutrition}>
                    <Text>Seng</Text>
                    <Text style={styles.contentNutrition}> {seng} mg </Text>
                </View>
            </View>
        </View>
    )
}


export const CardNutritionalNeedsMakro = (props) => {
    const{ingredients, calories, fat, protein, carbo, air, energy} = props;
    return (
        <View style={styles.container}>
            <View style={styles.nutrition}>
                <Text>Energi </Text>
                <Text style={styles.contentNutrition}> {energy} kkal </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Protein </Text>
                <Text style={styles.contentNutrition}> {protein} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Lemak </Text>
                <Text style={styles.contentNutrition}> {fat} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Karbohidrat </Text>
                <Text style={styles.contentNutrition}> {carbo} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Kalori </Text>
                <Text style={styles.contentNutrition}> {calories} gram </Text>
            </View>
            <View style={styles.nutrition}>
                <Text>Air </Text>
                <Text style={styles.contentNutrition}> {air} ml </Text>
            </View>
        </View>
    )
}


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
