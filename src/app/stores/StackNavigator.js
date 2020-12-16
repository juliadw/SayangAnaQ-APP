import {
    AddChildDataContainer,
    ArticleContainer,
    ChildDataContainer,
    CountHeightContainer,
    CountIndexContainer,
    CountMenuContainer,
    CountNutritionByHeightContainer,
    CountNutritionByIndexContainer,
    CountNutritionByWeightContainer,
    CountWeightContainer,
    DashboardMenuContainer,
    FigureNutritionalNeedsContainer,
    ListIngredientContainer,
    NutritionalNeedsContainer,
    ProfileContainer,
    RecMenuItemContainer,
    RecomendationMenuContainer,
    SignInContainer,
    SignUpContainer,
    SplashScreenContainer,
    UpdateChildDataContainer
} from '../../modules/App/Navigation';

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const SplashStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export const SplashStackScreen = () => (
    <SplashStack.Navigator>
        <SplashStack.Screen  
            name="Spalsh" 
            component={SplashScreenContainer} 
            options={{
                headerShown: false
            }} 
        />
    </SplashStack.Navigator>
)

export const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen  
            name="Login" 
            component={SignInContainer} 
            options={{
                headerShown: false
            }} 
        />
        <AuthStack.Screen  
            name="Register" 
            component={SignUpContainer} 
            options={{
                headerShown: false
            }} 
        />
    </AuthStack.Navigator>
)

export const HomeStackScreen = () => (
    <HomeStack.Navigator >
        <HomeStack.Screen 
            name="Home" 
            component={DashboardMenuContainer} 
            options={{
                headerShown: false
            }} 
        />
        <HomeStack.Screen 
            name="ChildData" 
            component={ChildDataContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="AddChildData" 
            component={AddChildDataContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="UpdateChildData" 
            component={UpdateChildDataContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="ListIngredient" 
            component={ListIngredientContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="RecomendationMenu" 
            component={RecomendationMenuContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="RecMenuItem" 
            component={RecMenuItemContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="ArticleSecreen" 
            component={ArticleContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountNutrition" 
            component={CountIndexContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountMenu" 
            component={CountMenuContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountWeigth" 
            component={CountWeightContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountHeight" 
            component={CountHeightContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountIndex" 
            component={CountIndexContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
            name="CountNutritionByHeight" 
            component={CountNutritionByHeightContainer} 
            options={{
                headerShown: false
            }}
        />
        <HomeStack.Screen 
        name="CountNutritionByWeight" 
        component={CountNutritionByWeightContainer} 
        options={{
            headerShown: false
        }}
        />
        <HomeStack.Screen 
        name="CountNutritionByIndex" 
        component={CountNutritionByIndexContainer} 
        options={{
            headerShown: false
        }}
        />
        <HomeStack.Screen 
        name="NutritionalNeeds" 
        component={NutritionalNeedsContainer} 
        options={{
            headerShown: false
        }}
        />
        <HomeStack.Screen 
        name="FigureNutritionalNeeds" 
        component={FigureNutritionalNeedsContainer} 
        options={{
            headerShown: false
        }}
        />
    </HomeStack.Navigator>
  )

export const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen  
            name="Profile" 
            component={ProfileContainer} 
            options={{
                headerShown: false
            }} 
        />
    </ProfileStack.Navigator>
)
