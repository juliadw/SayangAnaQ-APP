import React, { useEffect } from 'react'

import SplashScreenComponent from '../Component/SplashScreenComponent'

const SplashScreenContainer = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=> {
            navigation.replace('Auth');
        }, 3000)
    })
    return (
        <SplashScreenComponent />
    )
}

export default SplashScreenContainer
