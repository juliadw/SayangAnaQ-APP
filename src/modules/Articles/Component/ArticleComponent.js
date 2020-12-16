import { Image, StyleSheet, Text, View } from 'react-native';

import { Avatar } from 'react-native-elements';
import { Header } from '../../../components/header';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../app/styles/colors';

const ArticleComponent = (props) => {
    const {
        handlePressBack, 
        desc, 
        title, 
        avatar, 
        images, 
        date, 
        nameAuthor, 
        sumber
    } = props;
    return (
        <View style={styles.container}>
            <View  style={styles.header}>
                <Header headerTitle="Artikel" onPress={handlePressBack} />   
            </View>
            <ScrollView>
                <View >
                    <Image style={{width: '100%', height:250}} source={images} />
                </View>
                <View style={styles.ket} >
                    <View style={styles.bgColor}/>
                    <View style={styles.avatar}>
                        <Avatar 
                            rounded
                            size="medium"
                            source={avatar}
                        />
                        <View style={{flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 5}}>
                            <Text style={styles.textAuthor}>{nameAuthor}</Text>
                            <Text style={styles.textDate}>{date}</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal: 15}}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.article}> {desc} </Text>
                    <View style={styles.textSumber} >
                        <Text style={{color: colors.greySecondary}}> sumber:</Text>
                        <Text style={{color: colors.greySecondary}}> {sumber}</Text>
                    </View>
                </View>
        </ScrollView>
      </View>
    )
}

export default ArticleComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
      },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20
    },
    bgColor: {
        backgroundColor: '#ffdada',
        opacity: 0.5,
        height: 60,
    },
    ket: {
        position: 'relative',
        marginTop: -60,
    },
    avatar: {
        marginTop: -55,
        paddingHorizontal: 10,
        flexDirection: 'row',
        zIndex: 1
    },
    textAuthor: {
        color: colors.default,
        fontWeight: 'bold',
        fontSize: 16,
    },
    textDate: {
        color: colors.default,
        fontWeight: '600',
        fontSize: 13,
        color: '#858485'
    },
    textSumber: {
        marginVertical: 10
    },
    article: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'justify'
    }
})

