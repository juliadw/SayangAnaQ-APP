import { AddChildDataComponent, BookmarkComponent, ChildDataComponent, DashboardMenuComponent, UpdateChildDataComponent } from '../../modules/App/Navigation';

import React from 'react'
import { SvgHomePrimary } from '../../components/svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabBottomNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <SvgHomePrimary 
                style={{width: 20, height: 20}}
              
              />
            )
          }}
        />
        <Tab.Screen 
          name="Bookmark"  
          component={BookmarkComponent}
          options={{
            tabBarLabel: 'Bookmark',
            tabBarIcon: ({ tintColor }) => (
              <SvgHomePrimary 
                style={{width: 20, height: 20}}
              
              />
            )
          }}
        />
      </Tab.Navigator>
      );
}

export default TabBottomNavigation
