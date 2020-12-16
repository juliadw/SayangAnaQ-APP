import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import CardChildData from '../../../components/card/CardChildData'
import { Header } from '../../../components/header'
import { colors } from '../../../app/styles/colors'

const CountNutritionByIndexComponent = (props) => {
    const{listData, handleBack} = props;

    const renderItem = ({item}) => {
        return(
            <CardChildData 
                key={item.id}
                name={item.name}
                dob={item.dob}
                gender={item.gender} 
                onPress={() => props.navigation.navigate('CountIndex', {
                    name:item.name,
                    dob:item.dob,
                    gender:item.gender 
                })}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.wraper}>
                <Header headerTitle="Data Si kecil" onPress={handleBack}/>
                <Text style={{marginTop: 15}}>Pilih Data Si Kecil Bund</Text>
                <FlatList
                    data={listData.data.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default CountNutritionByIndexComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wraper: {
        padding: 20
    },
})
