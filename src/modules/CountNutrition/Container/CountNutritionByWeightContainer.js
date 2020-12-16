import * as ChildDataAction from '../../ChildData/Stores/Actions/ChildDataAction';

import React, { useEffect } from 'react'

import CountNutritionByWeightComponent from '../Component/CountNutritionByWeightComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CountNutritionByWeightContainer = (props) => {
    const {listData, actionChildData} = props;

    const handleChangeMenuCount = () => (
        props.navigation.navigate('CountMenu')
    );
    const handleBack = () => {
        props.navigation.goBack();
    }
    
    useEffect(() => {
        actionChildData.getChildData()
     }, [])

    return (
      <CountNutritionByWeightComponent
        {...props}
          handleChangeMenuCount={handleChangeMenuCount}
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

export default connect(mapStateToProps, mapDispatchToProps)(CountNutritionByWeightContainer)