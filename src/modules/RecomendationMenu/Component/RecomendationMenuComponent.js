import { FlatList, StyleSheet, Text, View } from 'react-native'

import Header from '../../../components/header/Header'
import MenuButton from '../../../components/button/MenuButton'
import React from 'react'
import { colors } from '../../../app/styles/colors'

const RecomendationMenuComponent = (props) => {
    const{handleBack, listData }=props
    
    const renderItem = ({item}) => {
        console.log(item);
        return(
            <MenuButton 
                key={item.id}
                title={item.menuTitle}
                onPress={() => props.navigation.navigate('RecMenuItem', {
                    menuTitle: item.menuTitle,
                    ingredients: item.ingredients,
                    process: item.process
                })} 
            /> 
        )
    }
    

    return (
        <View style={StyleSheet.container}>
            <View style={styles.wraper}>
                <Header headerTitle="Recomendasi Menu" onPress={handleBack}/>
                <Text style={styles.title}>Daftar Menu Si Kecil Bundaa!</Text>
                <FlatList
                    data={listData.data.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default RecomendationMenuComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wraper: {
        padding: 20
    },
    title: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '800',
        color: colors.greyPrimary
    }
})