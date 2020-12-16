import { AuthStackScreen, SplashStackScreen } from './StackNavigator';

import DrawerNavigation from './DrawerNavigation';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

 
const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Spalsh" 
                component={SplashStackScreen}  
                options={{
                    headerShown: false
                    }} 
                />
            <Stack.Screen 
                name="Auth" 
                component={AuthStackScreen}  
                options={{
                    headerShown: false
                    }} 
                />
            <Stack.Screen 
                name="App" 
                component={DrawerNavigation} 
                options={{
                    headerShown: false
                    }} 
                />
        </Stack.Navigator>
    );
};

export default Router;