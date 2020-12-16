import { Image, StyleSheet, Text, View } from 'react-native'
import { SvgHomePrimary, SvgLogout } from '../../../components/svg'

import { ImgProfile } from '../../../components/image'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../../app/styles/colors/index';
import { useSelector } from 'react-redux'

const DrawerContentComponent = (props) => {
    const {name, email, handleExit} = props;
    // const {form} = useSelector(state => state.SignUpReducer);
    const {form} = useSelector(state => state.SignInReducer);

    return (
        <View >
            <View style={styles.card}>
                <Image source={ImgProfile} resizeMode="contain" style={styles.logo} />
                <Text style={styles.title}>{form.name}</Text>
                <Text style={styles.label}>{form.email}</Text>
            </View>
            <View style={{marginTop: 20}}>
                <TouchableOpacity >
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <SvgHomePrimary style={{ marginLeft: 10 }} />
                        <Text style={styles.App}>Tentang Aplikasi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exit} onPress={handleExit}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <SvgLogout style={{ marginLeft: 10 }} />
                        <Text style={styles.App}>Keluar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DrawerContentComponent

const styles = StyleSheet.create({
    title: {
        color: 'black'
      },
      label: {
        color: '#ABB0B7'
      },
      card: {
        backgroundColor: colors,
        height: 150,
        paddingLeft: 20,
        alignItems: 'flex-start'
      },
      logo: { flex: 1, width: 60, height: 75 },
      App: { 
          marginLeft: 20, 
        color: '#ABB0B7'
    }
})
