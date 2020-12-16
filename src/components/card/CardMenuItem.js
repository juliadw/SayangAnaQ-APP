import { StyleSheet, Text, View } from 'react-native'

import { FlatList } from 'react-native-gesture-handler';
import React from 'react'
import { colors } from '../../app/styles/colors'

const CardMenuItem = (props) => {
    const{menuTitle, ingredients, process} = props;
    return (
        <View style={styles.card}>
            <View style={styles.title}>
                <Text style={styles.textTitle}> {menuTitle} </Text>
            </View>
            <View style={styles.subCard} >
                <Text style={styles.ingredient} >Bahan yang dibutuhkan</Text>
                <Text style={styles.listIngredient}>
                    {ingredients}
                </Text>
                <Text style={styles.ingredient} >Cara membuat</Text>
                <Text style={styles.listIngredient}>
                    {process}
                </Text>
            </View>
        </View>
    )
}

export default CardMenuItem

const styles = StyleSheet.create({
    
    card: { 
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 10,
        marginVertical: 20
      },
      title:{
          alignSelf: 'center', 
          marginTop: 10,
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
          color: colors.default,
      },
      ingredient:{
          paddingVertical: 10,
          fontSize: 16,
          fontWeight: '500',
      },
      listIngredient: {
          fontSize: 16,
          fontWeight: '500',
          color: colors.greySecondary,
          textAlign:'justify'
      },
      subCard: {
          paddingHorizontal: 20,
          marginBottom: 20
      }
})
