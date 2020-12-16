import React, { useEffect } from 'react'

import RecomendationMenuComponent from '../Component/RecomendationMenuComponent'
import { connect } from 'react-redux';
import { getRecomendationMenu } from '../Stores/Actions/RecomendationMenuAction'

const RecomendationMenuContainer = (props) => {
    const {listData} = props; 

    useEffect(() => {
        getRecomendationMenu();
     }, [])
    
     const handleBack = () => {
        props.navigation.goBack()
    }

    return (
        <RecomendationMenuComponent {...props}
            handleBack={handleBack}
            listData={listData}
            
            />
    )
}

const mapStateToProps = state => ({
    listData: state.RecomendationMenuReducer
});
  
const mapDispatchToProps = dispatch => ({
    getRecomendationMenu : dispatch(getRecomendationMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecomendationMenuContainer)
