import { StatusBar, StyleSheet, Text, View } from 'react-native'

import React from 'react';
import { SvgLeftArrow } from '../svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../app/styles/colors';

const Header = (props) => {
    const {onPress, headerTitle} = props;
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#794C74" />
            <TouchableOpacity style={styles.header} onPress={onPress} >
                <SvgLeftArrow/>
           </TouchableOpacity>
            <Text style={styles.title}> {headerTitle} </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    header: {
        marginTop: 3
    },
    title: {
        color:'#555555',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})
