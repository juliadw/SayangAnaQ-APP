import { BgDashboard, ImageSlider } from '../../../components/image'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SvgCalNutrition, SvgDrawerList, SvgIconChildDataPrimary } from '../../../components/svg'

import CardArticles from '../../../components/card/CardArticles'
import { CustomButton } from '../../../components/button'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../app/styles/colors'

const DashboardMenuComponent = (props) => {
    const{
        handleChangeListIngredients, 
        handleChangeRecomendationMenu, 
        handleChangeNutritionNeeds,
        renderItem,
        handleChangCount,
        childData,
        data
    } = props;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#C566BA" />
            <Image source={BgDashboard} style={styles.imgBackgorund}/>
                <TouchableOpacity style={{padding: 20}} onPress={() => props.navigation.openDrawer()}>
                    <SvgDrawerList />
                </TouchableOpacity>
            <ScrollView>
            <View style={styles.wraper}>
                <Text style={styles.title}>Hai, Bundaa</Text>
                <Text style={styles.subtitle}>Ayo cek perkembangan anak kamu!</Text>
                <Image source={ImageSlider} style={styles.imgCarousel}/>
                <View style={{marginTop:20, flexDirection: "row", justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={childData} style={styles.childDataButton}>
                        <SvgIconChildDataPrimary width='50' height='50' />
                        <Text style={styles.textbuttonChildData}>Daftar Si Kecil</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handleChangCount} style={styles.childDataButton}>
                        <SvgCalNutrition width='50' height='50'/>
                        <Text style={styles.textbuttonChildData}>Hitung Gizi Si Kecil</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: colors.default}}>Angka kecukupan Gizi</Text>
                    <CustomButton
                        onPress={handleChangeNutritionNeeds} 
                        title={'Daftar kebutuhan Gizi Anak berdasarkan umur'} 
                    />
                    <CustomButton 
                        onPress={handleChangeRecomendationMenu} 
                        title={'Rekomendasi Menu Makanan'} 
                    />
                    <CustomButton 
                        onPress={handleChangeListIngredients} 
                        title={'Daftar Bahan Makanan'} 
                    />
                </View>
                <View style={{marginTop: 20 }}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: colors.default}}>Artikel Pilihan</Text>
                    <FlatList
                        data={data.data.data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}


export default DashboardMenuComponent

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    wraper: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    imgBackgorund : {
        position: "absolute",
        resizeMode: "cover",
        width: '100%',

    },
    title: {
        fontWeight: '600',
        fontSize: 25,
        color: colors.white
    },
    subtitle : {
        fontWeight: '400',
        fontSize: 14,
        width: 255,
        marginTop: 10,
        color: colors.white
    },
    imgCarousel: {
        resizeMode: "contain", 
        width: "100%", 
        height: 170, 
        borderRadius: 5,
        marginTop: 20
    },
    childDataButton: {
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 40,
        // marginHorizontal: 50,
        alignItems: "center",
        shadowColor: '#000',
        shadowOpacity:  0.30,
        shadowOffset: { width: 0, height: 3},
        elevation: 8
    },
    textbuttonChildData: {
        marginTop: 12,
        width: 60,
        textAlign: 'center',
        fontSize: 14
    }, 
})
