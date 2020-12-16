import { SafeAreaView, StyleSheet, View } from 'react-native'

import CardCountMenu from '../../../components/card/CardCountMenu';
import Header from '../../../components/header/Header';
import React from 'react';
import { colors } from '../../../app/styles/colors';

const CountMenuComponent = (props) => {
    const{handleBack, handleChangeCountWeight, handleChangeCountIndex, handleChangeCountHeight} = props;
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wraper}>
                <Header headerTitle="Hitung Gizi" onPress={handleBack} />
                <View style={styles.content}>
                    <CardCountMenu onPress={handleChangeCountWeight} titleCard="Ukur Status Gizi si kecil dengan standar Berat Badan" />
                    <CardCountMenu onPress={handleChangeCountHeight} titleCard="Ukur Status Gizi si kecil dengan standar Tinggi Badan" />
                    <CardCountMenu onPress={handleChangeCountIndex} titleCard="Ukur Status Gizi si kecil dengan standar Berat Badan dan Tinggi Badan" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CountMenuComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wraper: {
        padding: 20
    },
    content: {
        marginVertical: 10
    }
})
