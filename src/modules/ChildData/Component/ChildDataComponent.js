import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Header } from '../../../components/header'
import React from 'react';
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../app/styles/colors'

const ChildDataComponent = (props) => {
    const {handleBack, handleAdd, listData, renderItem } = props;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wraper}>
            <Header onPress = {handleBack} headerTitle="Daftar Si Kecil"  />
                <View>
                    <View style={styles.textDesc}>
                        <Text>Silahkan tekan Tombol “Tambah” untuk menambahkan data anak Bunda</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
                        <Text style={styles.textButtonAdd}>Tambah</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textDesc}>
                    <Text>Data Si Kecil</Text>
                </View>
                <ScrollView >
                    <FlatList
                        data={listData.data.data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={renderItem}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 2,
        backgroundColor: colors.white,
        // marginBottom: 20
        
    },
    wraper: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 30
    },
    textDesc: {
        marginVertical: 15
    },
    buttonAdd: {
        borderWidth : 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.default,
        width: '30%',
        alignSelf: 'flex-end'
    },
    textButtonAdd: {
        color: colors.default,
        textAlign: 'center'
    }
})

export default ChildDataComponent
