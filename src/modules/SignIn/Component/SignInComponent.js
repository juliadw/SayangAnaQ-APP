import { Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import ActionButton from '../../../components/button/ActionButton'
import { InputForm } from '../../../components/input'
import React from 'react'
import { SvgLogin } from '../../../components/svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../app/styles/colors'

const SignInComponent = (props) => {
    const {
        register, 
        onInputChange, 
        handleSubmitLogin, 
        form,
        validationEmail,
        validationPassword,
        handleValidEmail,
        handleValidPassword,
        disabledButton,
        updateSecureTextEntry,
        handleSecureTextEntery,
        secureTextEntry 
    } = props;    

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.viewImg}>
                            <SvgLogin width={215} height={135} />
                        </View>
                        <View style={styles.form}>
                            <View style={styles.viewTextInput}>
                                <InputForm 
                                    placeholder="Email"
                                    value={form.email}
                                    onChangeText={value => onInputChange(value, 'email')}
                                    keyboardType="email-address"
                                    onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
                                />
                            </View>
                                {validationEmail}
                                
                            <View style={styles.viewTextInput}>
                                <InputForm 
                                    placeholder="Password"
                                    value={form.password}
                                    onChangeText={value => onInputChange(value, 'password')}
                                    // secureTextEntry={true}
                                    secureTextEntry={secureTextEntry}
                                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                                />
                                <TouchableOpacity onPress={updateSecureTextEntry}>
                                    {handleSecureTextEntery}
                                </TouchableOpacity>
                            </View>
                                 {validationPassword}
                            <ActionButton title="Login" onPress={handleSubmitLogin} disabled={disabledButton} />
                            <View style={styles.account}>
                                <Text style={{color: '#A5A5A5'}}>Belum punya akun ?</Text>
                                <TouchableOpacity 
                                    onPress={register}
                                >
                                    <Text style={styles.textRegister} >Daftar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.flex} />
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView >
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    inner: {
        flex: 1,
        justifyContent: "flex-end",
    },
    viewImg: {
        alignItems: 'center',
        marginVertical: 50
    },
    form: {
        marginBottom: 20
    },
    viewTextInput:{
        marginTop: 15, 
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.default,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    account: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    textRegister:{
        color: colors.default,
        paddingLeft: 5
    }
  });

export default SignInComponent
