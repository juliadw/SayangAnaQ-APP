import React, { useEffect } from 'react'

import ListIngredientComponent from '../Component/ListIngredientComponent'
import {connect} from 'react-redux';
import { getIngredients } from '../Stores/Actions/ListIngredientsAction';

const ListIngredientContainer = (props) => {
  const {listData} = props;

  const handleBack = () => {
        props.navigation.goBack()
    }

    useEffect(() => {
       getIngredients();
    }, [])
    
    // console.log(listData);

    return (
       <ListIngredientComponent 
            {...props}
            handleBack={handleBack}
            listData={listData}
       />
    )
}

const mapStateToProps = state => ({
    listData: state.ListIngredientReducer
});
  
const mapDispatchToProps = dispatch => ({
    getIngredients : dispatch(getIngredients())
});
  

export default connect(mapStateToProps, mapDispatchToProps)(ListIngredientContainer)
