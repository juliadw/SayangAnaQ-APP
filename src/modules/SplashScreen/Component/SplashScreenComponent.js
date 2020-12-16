import { StyleSheet, View } from 'react-native'

import React from 'react'
import { SvgSplash } from '../../../components/svg'

const SplashScreenComponent = () => {    
    return (
        <View style={styles.viewSplash}>
            <SvgSplash width={215} height={135} />
        </View>
    ) 
}

const styles = StyleSheet.create({
    viewSplash: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imgSplash: {
        height: 125,
        width: 125
    }
  });
  
export default SplashScreenComponent;