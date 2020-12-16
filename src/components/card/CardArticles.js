import { Image, StyleSheet, Text, View } from 'react-native';

import { Avatar } from 'react-native-elements';
import { ImageArticles } from '../image';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../app/styles/colors';

const CardArticles = (props) => {
    const{nameAuthor, date, onPress, title, avatar, images} = props
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.cardImage} source={images} />
            <Text style={styles.cardText}> {title} </Text>
            <View style={styles.avatar}>
                <Avatar 
                    rounded
                    source={avatar}
                    />
                    <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
                        <Text style={styles.textAuthor}>{nameAuthor}</Text>
                        <Text style={styles.textDate}>{date}</Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardArticles;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity:  1,
        shadowOffset: { width: 0, height: 1},
        elevation: 8,
        backgroundColor: colors.white,
        borderRadius: 20,
        marginBottom: 10,
        marginHorizontal: '2%',
        width: '96%',
    },
    cardText: {
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        padding: 10,
        color: colors.default,
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'relative'
    },
    avatar: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    textAuthor: {
        color: colors.default,
        fontWeight: '400',
        fontSize: 14
    },
    textDate: {
        color: colors.default,
        fontWeight: '400',
        fontSize: 10,
        color: '#858485'
    }
})
