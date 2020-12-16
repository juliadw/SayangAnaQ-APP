import { Field, reduxForm } from 'redux-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SvgLeftArrow, SvgRegister} from '../../../components/svg';

import ActionButton from '../../../components/button/ActionButton';
import {InputForm} from '../../../components/input';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors } from '../../../app/styles/colors';

const SignUpComponent = (props) => {
  const {
    back, 
    handleSubmitRegister, 
    form, 
    onInputChange,
    secureTextEntry,
    updateSecureTextEntry,
    handleSecureTextEntery,
    handleValidName,
    handleValidEmail,
    handleValidPassword,
    validationName,
    validationEmail,
    validationPassword,
    disabledButton
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={back}>
          <SvgLeftArrow />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.viewImg}>
              <SvgRegister width={215} height={135} />
            </View>
            <View style={styles.form}>
              <View style={styles.viewTextInput}>
                <InputForm
                  placeholder="Nama lengkap"
                  value={form.name}
                  onChangeText={(value) => onInputChange(value, 'name')}
                  onEndEditing={(e)=>handleValidName(e.nativeEvent.text)}
                />
              </View>
                {validationName}

              <View style={styles.viewTextInput}>
                <InputForm
                  placeholder="Email"
                  value={form.email}
                  onChangeText={(value) => onInputChange(value, 'email')}
                  keyboardType="email-address"
                  onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
                />
              </View>
              {validationEmail}
              
              <View style={styles.viewTextInput}>
                <InputForm
                  placeholder="Password"
                  value={form.password}
                  onChangeText={(value) => onInputChange(value, 'password')}
                  secureTextEntry={secureTextEntry}
                  onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                />
                 <TouchableOpacity onPress={updateSecureTextEntry}>
                    {handleSecureTextEntery}
                </TouchableOpacity>
              </View>
              {validationPassword}

              <ActionButton title="Register" onPress={handleSubmitRegister} disabled={disabledButton} />
            </View>
            <View style={styles.flex} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 10,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewImg: {
    alignItems: 'center',
    marginVertical: 40,
  },
  form: {
    marginBottom: 15,
  },
  viewTextInput: {
    marginTop: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.default,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  button: {
    marginTop: 12,
  },
  flex: {
    flex: 1,
  },
});

export default reduxForm({ form: 'signUp' })(SignUpComponent);
