import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './theme';
import AddCity from './AddCity/AddCity';
import Cities from './Cities/Cities';
import City from './Cities/City';

const navigationOptions = {
    headerStyle: {
        backgroundColor: colors.primary
    },
    headerTintColor: '#fff'
};

const CitiesNav = createStackNavigator({
    Cities: { 
        screen: Cities,
        navigationOptions: navigationOptions
    },
    City: { 
        screen: City,
        navigationOptions: navigationOptions
    }
}, {
    initialRouteName: 'Cities',
    defaultNavigationOptions: {
        gestureEnabled: false,
    }
});

// const Tabs = createBottomTabNavigator({
//     Cities: { screen: CitiesNav},
//     AddCity: { screen: AddCity}
// });

// export default Tabs;
