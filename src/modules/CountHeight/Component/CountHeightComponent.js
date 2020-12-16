import { Alert, Modal, StyleSheet, Text, ToastAndroid, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import { SvgModalBadNutrition, SvgModalGoodNutrition } from '../../../components/svg';

import ActionButton from '../../../components/button/ActionButton';
import { Header } from '../../../components/header';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../app/styles/colors';

const CountHeightComponent = (props) => {
const { name, dob, gender  } = props.route.params;

const [modalVisible, setModalVisible] = useState(false);
const [weight, setWeight] = useState("");
const [age, setAge] = useState("");
const [bbi, setBbi] = useState(0)
const [cal, setCal] = useState(0)


const handleBack = () => {
    props.navigation.goBack()
}

const hitungbbi = () => {
    const hitung = ((age*2)+8)
    const calori = (hitung*90)
    setBbi(hitung)
    setCal( calori)    
}

useEffect(()=>{
    hitungbbi()
}, [])

console.log('hitung',bbi);
console.log('hitungCalori',cal);



return (
    <View style={styles.container}>
            <View style={styles.wraper}>
                <Header onPress={handleBack} headerTitle="Hitung Gizi Berdasarkan Berat"/>
                <View>
                    <Text style={styles.textName}> {name} </Text>
                    <View style={styles.textValue}>
                        <Text>Tanggal Lahir</Text>
                        <Text> {dob} </Text>
                    </View>
                    <View style={styles.textValue}>
                        <Text>Jenis Kelamin</Text>
                        <Text>{gender}</Text>
                    </View>
                    <View style={styles.textValueCount}>
                        <Text style={{marginTop: 10}} >Umur Si Kecil</Text>
                        <TextInput 
                            placeholder = "Umur Si Kecil"
                            keyboardType = "numeric"
                            value={age}
                            onChangeText={(value) => setAge(value)}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.textValueCount}>
                        <Text style={{marginTop: 10}} >Tinggi Badan (Cm)</Text>
                        <TextInput 
                            placeholder = "Tinggi Badan (Cm)"
                            keyboardType = "numeric"
                            value={weight}
                            onChangeText={(value) => setWeight(value)}
                            style={styles.inputText}
                        />
                    </View>

                    <View style={styles.buttonAction} >
                        <ActionButton 
                            onPress={() => {setModalVisible(true), hitungbbi()}} 
                            title = 'Hitung'                             
                        />
                    </View>

                    {/* =====MODAL====== */}
                    {weight == "" ?(
                        ToastAndroid.show('lengkapi form yah bund', ToastAndroid.SHORT)                
                    ):weight < bbi ?(
                        <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Status Gizi Si Kecil</Text>
                                    <View style={{alignItems: 'center'}}>
                                        <SvgModalBadNutrition width='100'/>
                                        <Text style={styles.optionNutrition}>Gizi Kurang</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text> Kalori yang dibutuhkan </Text>
                                            <Text style={{fontWeight: 'bold', color: colors.default}} >{cal}</Text>
                                            <Text> kalori/hari </Text>
                                        </View>
                                    </View>
                                    <TouchableHighlight
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}  
                                    >
                                        <Text style={styles.textStyle}>Selesai</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>
                     ):weight == bbi ?(
                        <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Status Gizi Si Kecil</Text>
                                    <View style={{alignItems: 'center'}}>
                                        <SvgModalGoodNutrition width='100'/>
                                        <Text style={styles.optionNutrition}>Gizi Baik</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text> Kalori yang dibutuhkan </Text>
                                            <Text style={{fontWeight: 'bold', color: colors.default}} >{cal}</Text>
                                            <Text> kalori/hari </Text>
                                        </View>
                                    </View>

                                    <TouchableHighlight
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}  
                                    >
                                        <Text style={styles.textStyle}>Selesai</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>
                     ):(
                        <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Status Gizi Si Kecil</Text>
                                <View style={{alignItems: 'center'}}>
                                    <SvgModalBadNutrition width='100'/>
                                    <Text style={styles.optionNutrition}>Gizi Lebih</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text> Kalori yang dibutuhkan </Text>
                                        <Text style={{fontWeight: 'bold', color:colors.default}} >{cal}</Text>
                                        <Text> kalori/hari </Text>
                                    </View>
                                </View>

                                <TouchableHighlight
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}  
                                >
                                    <Text style={styles.textStyle}>Selesai</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    )}
                </View>
            </View>
        </View>
    )
}

export default CountHeightComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wraper: {
        padding: 20
    },
    buttonAction: {
        alignSelf: 'flex-end',
        width: '40%',
    },
    centeredView: {
        flex: 1,
        backgroundColor: '#00000070',
        justifyContent: "center"
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        paddingTop: 10,
        color: colors.default,
        backgroundColor: colors.white,
        fontWeight: "bold",
        textAlign: 'right'
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18
      },
      textName: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: colors.default, 
        fontSize: 16, 
        marginVertical: 20
      },
      textValue: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomColor: colors.default, 
        borderBottomWidth: 1, 
        paddingTop: 20,
        paddingBottom: 10
      },
      optionNutrition : {
        fontSize: 16, 
        fontWeight: '600', 
        paddingVertical: 10
      },
      inputText : {
          textAlign: 'right',
          marginBottom: -10
      },
      textValueCount: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomColor: colors.default, 
        borderBottomWidth: 1, 
        paddingTop: 10,
        paddingBottom: 5
      },
})
