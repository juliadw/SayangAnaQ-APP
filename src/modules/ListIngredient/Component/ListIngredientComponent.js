import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

import CardListIngredients from '../../../components/card/CardListIngredients'
import { Header } from '../../../components/header'
import React from 'react'
import { colors } from '../../../app/styles/colors'

const ListIngredientComponent = (props) => {
    const {handleBack, listData} = props;
    
    const renderItem = ({item}) => {
        return (
            <View style={{marginBottom: 20, marginHorizontal: 20}}> 
                <View style={{paddingTop: 10}}>
                    <CardListIngredients
                        key={item.id}
                        ingredients= {item.ingredient} 
                        calories={item.calories} 
                        carbo={item.carbo}
                        fat={item.fat}
                        protein={item.protein}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container} >
            <View style={styles.wraper}>
                <Header headerTitle="Daftar Bahan Makanan" onPress={handleBack}/>
                <Text style={styles.list}>Disajikan Per 100 Gram</Text>
            </View>

            <ScrollView>
                <FlatList
                    data={listData.data.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
    )
}

export default ListIngredientComponent
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
