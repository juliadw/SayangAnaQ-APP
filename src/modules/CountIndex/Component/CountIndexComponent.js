import { Alert, Modal, StyleSheet, Text, ToastAndroid, TouchableHighlight, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import { SvgModalBadNutrition, SvgModalGoodNutrition, SvgWeightIMT } from '../../../components/svg';

import ActionButton from '../../../components/button/ActionButton';
import { Header } from '../../../components/header';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../app/styles/colors';

const CountIndexComponent = (props) => {
const { name, dob, gender  } = props.route.params;

const [modalVisible, setModalVisible] = useState(false);
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [diag, setDiag] = useState("");
const [IMT, setIMT] = useState("");


const handleBack = () => {
    props.navigation.goBack()
}

const countIMT = () => {
    const z = weight/(height*height)
    setIMT({IMT: z}) 
    if (z<0.00185) {
        setDiag({diag:'Berat badan kurang'})
      }
      else if (z>=0.00185&&z<=0.00249) {
        setDiag({diag:'Berat badan ideal'})
      }
      else if (z>=0.00250&&z<=0.00299) {
        setDiag({diag:'Berat badan berlebih'})
      }
      else if (z>=0.0030&&z<=0.00399) {
        setDiag({diag:'Berat badan sangat berlebih'})
      }
      else if (z>0.00399) {
        setDiag({diag:'Anda obesitas'})
      }
      else {
        ToastAndroid.show('lengkapi form yah bund', ToastAndroid.SHORT)                     
    }  
      console.log('diag: ', diag);
      console.log('imt: ', IMT);
}


useEffect(()=>{
    countIMT()
}, [])

    return (
        <View style={styles.container}>
            <View style={styles.wraper}>
                <Header onPress={handleBack} headerTitle="Hitung Gizi Berdasarkan Berat dan Tinggi"/>
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
                        <Text style={{marginTop: 10}} >Berat Badan (Kg)</Text>
                        <TextInput 
                            placeholder = "Berat Badan (Kg)"
                            keyboardType = "numeric"
                            value={weight}
                            onChangeText={value => setWeight(value)}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.textValueCount}>
                        <Text style={{marginTop: 10}} >Tinggi Badan (Cm)</Text>
                        <TextInput 
                            placeholder = "Tinggi Badan (Cm)"
                            keyboardType = "numeric"
                            value={height}
                            onChangeText={value => setHeight(value)}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.buttonAction} >
                        <ActionButton 
                            onPress={() => {setModalVisible(true), countIMT()}} 
                            title = 'Hitung'                             
                        />
                    </View>

                    {/* =====MODAL====== */}
                    {weight&&height == "" ?(
                        ToastAndroid.show('lengkapi form yah bund', ToastAndroid.SHORT)                     
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
                                    {/* <Text style={styles.modalText}>Status Gizi Si Kecil</Text> */}
                                    <View style={{alignItems: 'center'}}>
                                    <SvgWeightIMT width='100'/>
                                        <Text style={styles.optionNutrition}> {diag.diag} </Text>
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

export default CountIndexComponent;

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
      textValueCount: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomColor: colors.default, 
        borderBottomWidth: 1, 
        paddingTop: 10,
        paddingBottom: 5
      },
      optionNutrition : {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: colors.default,
        paddingVertical: 20
      },
      inputText : {
          textAlign: 'right',
          marginBottom: -10
      }
})
