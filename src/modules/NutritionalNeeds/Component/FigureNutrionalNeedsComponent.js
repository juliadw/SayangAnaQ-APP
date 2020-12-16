import { CardNutritionalNeedsMakro, CardNutritionalNeedsMikro } from '../../../components/card/CardNutritionalNeeds'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../../../components/header/Header'
import React from 'react'
import { colors } from '../../../app/styles/colors'

const FigureNutrionalNeedsComponent = (props) => {
    const{handleBack }=props
    return (
        <View style={styles.container} >
            <View style={styles.wraper}>
                <Header headerTitle="Angka Kecukupan Gizi" onPress={handleBack}/>
            </View>

            <ScrollView>
                <View style={{marginBottom: 20, marginHorizontal: 20}}> 
                    <Text style={styles.list}>Kebutuhan zat gizi makro</Text>
                    <View style={{paddingTop: 10}}>
                        <CardNutritionalNeedsMakro
                            energy= "1400"
                            protein= "25"
                            fat= "50"
                            carbo= "220"
                            calories= "20"
                            air= "1450"
                        />
                    </View>
                </View>
                <View style={{marginBottom: 20, marginHorizontal: 20}}> 
                    <Text style={styles.list}>Kebutuhan zat gizi mikro</Text>
                    <View style={{paddingTop: 10}}>
                        <CardNutritionalNeedsMikro
                            vitA= "1400"
                            vitD= "25"
                            vitC= "50"
                            vitK= "220"
                            vitB12= "20"
                            kalium= "1450"
                            kalsium= "1400"
                            natrium= "25"
                            fosfor= "50"
                            besi= "220"
                            seng= "20"
                            sodium= "1450"
                        />
                    </View>
                </View>
                {/* <FlatList
                    data={listData.data.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                /> */}
            </ScrollView>
        </View>
    )
}

export default FigureNutrionalNeedsComponent
const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: colors.white
    },
    wraper: {
        paddingVertical: 20, 
        marginHorizontal: 20
    },
    list: {
        fontSize: 16,
        marginTop: 10
    }
    
})