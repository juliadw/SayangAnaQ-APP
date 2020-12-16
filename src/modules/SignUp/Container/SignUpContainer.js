import * as Animatable from 'react-native-animatable';
import * as SignUpAction from '../Stores/Actions/SignUpAction';

import {Alert, Text, ToastAndroid} from 'react-native';
import React, { useState } from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect, useSelector} from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';
import SignUpComponent from '../Component/SignUpComponent';

const SignUpContainer = (props) => {
  const {actionSignUp} = props;
  const [data, setData] = useState({
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isDissableButton: true,
    secureTextEntry: true,
})
  const {form} = useSelector(state => state.SignUpReducer);

  const handlePressBack = () => {
    props.navigation.goBack();
  };

  const handleSubmitRegister =  () => {
    if({form}.form.name && { form }.form.password && {form}.form.email !== ''){
      props.navigation.push('Login');
      console.log('data yang dikirim: ', form );
      ToastAndroid.show('Sukses', ToastAndroid.SHORT);
      actionSignUp.postDataUser(form)
      form.name='',
      form.email='',
      form.password=''
    } else {
      Alert.alert('Lengkapi Form Ya Bund!');
    }
  };

  const onInputChange = (value, inputType) => {
    actionSignUp.setFormSignUp(inputType, value);
  }

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

  const handleValidName = (value) => {
    if( value.trim().length >= 4 ) {
        setData({
            ...data,
            isValidName: true,
            isDissableButton: false
        });
    } else {
        setData({
            ...data,
            isValidName: false,
            isDissableButton: true
        });
    }
}
  
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


  return (
    <SignUpComponent
      {...props}
      back={handlePressBack}
      handleSubmitRegister={handleSubmitRegister}
      onInputChange={onInputChange}
      secureTextEntry={data.secureTextEntry ? true : false}
      updateSecureTextEntry={updateSecureTextEntry}
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
      handleValidName={handleValidName}
      handleValidEmail={handleValidEmail}
      handleValidPassword={handleValidPassword}
      disabledButton={data.isDissableButton}
      validationName = {
        data.isValidName ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={{color: 'red', paddingTop: 10, paddingLeft: 5}}>Email must use be 4 characters long.</Text>
        </Animatable.View>
    }
      validationEmail = {
          data.isValidEmail ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{color: 'red', paddingTop: 10, paddingLeft: 5}}>Email must use the @ character</Text>
          </Animatable.View>
      }
      validationPassword = {
          data.isValidPassword ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{color: 'red', paddingTop: 10, paddingLeft: 5}}>Password must be 8 characters long.</Text>
          </Animatable.View>
      }
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  actionSignUp: bindActionCreators(SignUpAction, dispatch)
});

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(SignUpContainer);
