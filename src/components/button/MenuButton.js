import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SvgDataNutrition, SvgRightArrowPrimary, SvgRightArrowWhite } from '../svg';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const MenuButton = (props) => {
  const {title, onPress} = props;
    const [ isPress, setIsPress ] = useState(true);

    const touchProps = {
        activeOpacity: 1,
        underlayColor: '#C566BA',    
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),        
    };

    const touchPropsText = {
      activeOpacity: 1,
      underlayColor: '#794C74',    
      style: isPress ? styles.textPress : styles.textNormal,
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),       
  };

    return (
        <View style={{flexDirection: 'row', marginTop: 20 }}>
            <TouchableHighlight {...touchProps} onPress={onPress}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10, alignItems: 'center'}}>
                <Text {...touchPropsText} >{title}</Text>
                <SvgRightArrowWhite />
              </View>
            </TouchableHighlight>
        </View>
    )
}

export default MenuButton

const styles = StyleSheet.create({
    btnNormal: {
        backgroundColor: '#794C74',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#ffffff'
      },
      btnPress: {
        backgroundColor: '#794C74',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#ffffff'
      },
      textNormal: {
        color: '#ffffff',
        alignItems: 'center', 
        paddingVertical: 10,
        fontSize: 16,
        width: '95%'
      },
      textPress: {
        color: '#ffffff',
        alignItems: 'center', 
        paddingVertical: 10,
        fontSize: 16,
        width: '95%'
      }
})
