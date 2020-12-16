import React, { useEffect, useState } from 'react'

import {API_APP_URL} from '@env'
import Axios from 'axios'
import CardArticles from '../../../components/card/CardArticles'
import DashboardMenuComponent from '../Component/DashboardMenuComponent'
import { connect } from 'react-redux'
import { getDashboardMenu } from '../Stores/Actions/DashboardMenuAction'

const DashboardMenuContainer = (props) => {
     const {dataArticle} = props  

    useEffect(() => {
        getDashboardMenu()
    },[])

    const handlePressChildData = () => (
        props.navigation.navigate('ChildData')
    );
    const handleChangeListIngredients = () => (
        props.navigation.navigate('ListIngredient')
    );
    const handleChangeRecomendationMenu = () => (
        props.navigation.navigate('RecomendationMenu')
    );
    const handleChangeNutritionNeeds = () => (
        props.navigation.navigate('NutritionalNeeds')
    );
    const handleChangeArticle = () => (
        props.navigation.navigate('ArticleSecreen')
    );
    const handleChangCount = () => (
        props.navigation.navigate('CountMenu')
    )

    const renderItem = ({item}) => {
        return (
            <CardArticles
                key={item.id}
                title={item.title} 
                nameAuthor={item.author}
                date={item.date}
                avatar={{uri: (item.avatar)}}
                images={{uri: (item.uriImage)}}
                onPress={() => props.navigation.navigate('ArticleSecreen', {
                    title: item.title,
                    desc: item.desc,
                    uriImage: item.uriImage,
                    date: item.date,
                    avatar: item.avatar,
                    nameAuthor: item.author,
                    images: item.uriImage,
                    sumber: item.sumber
                })} 
            />
        )
    }
    
    
    return (
        <DashboardMenuComponent {...props}
            childData={handlePressChildData}
            handleChangeListIngredients={handleChangeListIngredients}
            handleChangeRecomendationMenu={handleChangeRecomendationMenu}
            handleChangeArticle={handleChangeArticle}
            handleChangCount={handleChangCount}
            data ={dataArticle}
            renderItem={renderItem}
            handleChangeNutritionNeeds={handleChangeNutritionNeeds}
        />
    )
}

const mapStateToProps = state => ({
    dataArticle: state.DashboardMenuReducer
});
  
const mapDispatchToProps = dispatch => ({
    getDashboardMenu : dispatch(getDashboardMenu())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenuContainer)

// export default DashboardMenuContainer
