import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Opcao from './Opcao';
const AppStack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" initialRouteName='Login' screenOptions={{
                cardStyle: { backgroundColor: '#F0F0F5' }
            }}>
                <AppStack.Screen name="Login" component={Login} />
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}