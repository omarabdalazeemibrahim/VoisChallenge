import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs';
import NewsDetails from '../Screens/NewsDetails';
import Settings from '../Screens/Settings';

const Main = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Main.Navigator
                screenOptions={{ headerShown: false }}
                initalRouteName="tabBar"
                key="mainStack"
            >
                <Main.Screen name="tabBar" component={Tabs} />
                <Main.Screen name="newsDetails" component={NewsDetails} />
                <Main.Screen name="settings" component={Settings} />

            </Main.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
