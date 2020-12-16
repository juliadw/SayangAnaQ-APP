import { StyleSheet, Text, View } from 'react-native'

import CardMenuItem from '../../../components/card/CardMenuItem'
import { Header } from '../../../components/header'
import React from 'react'
import { colors } from '../../../app/styles/colors'

const RecMenuItemComponent = (props) => {
    const{handleBack} = props;
    const { menuTitle, ingredients, process  } = props.route.params;
    
    return (
        <View style={styles.container}>
            <View style={styles.wraper}>
                <Header headerTitle="Recomendasi Menu" onPress={handleBack} />
                <CardMenuItem 
                    menuTitle={menuTitle}
                    ingredients={ingredients}
                    process={process} 
                />
            </View>
        </View>
    )
}

export default RecMenuItemComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wraper: {
        padding: 20
    }
})
