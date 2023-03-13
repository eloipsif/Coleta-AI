import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login/index";
import Opcao from "./Opcao/opcao";

const AppStack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName="Login"
        screenOptions={{
          cardStyle: { backgroundColor: "#F0F0F5" },
        }}
      >
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
