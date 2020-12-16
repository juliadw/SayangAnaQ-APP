import * as Animatable from 'react-native-animatable';
import * as SignInAction from '../Stores/Actions/SignInAction';

import { Alert, StyleSheet, Text, ToastAndroid } from 'react-native';
import React, { useState } from 'react'
import {bindActionCreators, compose} from 'redux';
import {connect, useSelector} from 'react-redux';

import {API_APP_URL} from '@env'
import Axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import SignInComponent from '../Component/SignInComponent';

const SignInContainer = (props) => {
    const {actionSignIn} = props
    const {form} = useSelector(state => state.SignInReducer);
    
    const [data, setData] = useState({
        isValidEmail: true,
        isValidPassword: true,
        isDissableButton: true,
        secureTextEntry: true,
    })
    
    const handlePressButtonSignUp = () => (
        props.navigation.navigate('Register')
        )
        
        const onInputChange = (value, inputType) => {
            actionSignIn.setFormLogin(inputType, value);
        }
        
        const [user, setUser] = useState([])
        const handleSubmitLogin = () => {
            if({ form }.form.password && {form}.form.email !== ''){
                try {
                  Axios.get(`${API_APP_URL}/users?email=${form.email}&password=${form.password}`)
                  .then(res => {
                    setUser(res.data[0].id)
                   if(res.data[0].id != null){
                     actionSignIn.submitLoginSuccess(res.data)
                     props.navigation.push('App');
                   }else if(!res.data[0].id){
                     actionSignIn.submitLoginError(data.error)
                     ToastAndroid.show("Data tidak terdaftar", ToastAndroid.SHORT);
                   }
                   form.email="",
                   form.password=""
                })  
                } catch (error) {
                  console.log(error);
                }
            } else {
                Alert.alert('Lengkapi Form Ya Bund!');
            }
        };            

        const handleValidEmail = (value) => {
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if( reg.test(value) === true ) {
                setData({
                    ...data,
                    isValidEmail: true,
                    isDissableButton: false
                });
            } else {
                setData({
                    ...data,
                    isValidEmail: false,
                    isDissableButton: true
                });
            }
        }

        const handleValidPassword = (value) => {
            if( value.trim().length >= 8 ) {
                setData({
                    ...data,
                    isValidPassword: true,
                    isDissableButton: false
                });
            } else {
                setData({
                    ...data,
                    isValidPassword: false,
                    isDissableButton: true
                });
            }
        }
        
        const updateSecureTextEntry = () => {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }

    return (
        <SignInComponent
            {...props}
            register={handlePressButtonSignUp}
            handleSubmitLogin = {handleSubmitLogin}
            onInputChange={onInputChange}
            form={form}
            handleValidEmail={handleValidEmail}
            handleValidPassword={handleValidPassword}
            validationEmail = {
                data.isValidEmail ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{color: 'red'}}>Email must use the @ character</Text>
                </Animatable.View>
            }
            validationPassword = {
                data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{color: 'red'}}>Password must be 8 characters long.</Text>
                </Animatable.View>
            }
            updateSecureTextEntry={updateSecureTextEntry}
            secureTextEntry={data.secureTextEntry ? true : false}
            disabledButton={data.isDissableButton}
            handleSecureTextEntery={
                data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />
            }
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    actionSignIn: bindActionCreators(SignInAction, dispatch)
  });
  
  const withConnect = connect(null, mapDispatchToProps);
  export default compose(withConnect)(SignInContainer);