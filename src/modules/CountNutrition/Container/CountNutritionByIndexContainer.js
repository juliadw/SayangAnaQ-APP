import * as ChildDataAction from '../../ChildData/Stores/Actions/ChildDataAction';

import React, { useEffect } from 'react'

import CountNutritionByIndexComponent from '../Component/CountNutritionByIndexComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CountNutritionByIndexContainer = (props) => {
    const {listData, actionChildData} = props;

    const handleBack = () => {
        props.navigation.goBack();
    }
    
    useEffect(() => {
        actionChildData.getChildData()
     }, [])

    return (
      <CountNutritionByIndexComponent 
        {...props}
          handleBack ={handleBack}
          listData={listData}
      />
    )
}

const mapStateToProps = state => ({
    listData: state.ChildDataReducer
});

const mapDispatchToProps = (dispatch) => ({
    actionChildData: bindActionCreators(ChildDataAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CountNutritionByIndexContainer)