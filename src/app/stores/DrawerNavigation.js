import { DashboardMenuContainer } from '../../modules/App/Navigation';
import DrawerContentContainer from '../../modules/DrawerContent/Container/DrawerContentContainer';
import { HomeStackScreen } from './StackNavigator';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContentContainer {...props} />} >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
      </Drawer.Navigator>
    )
}


export default DrawerNavigation;