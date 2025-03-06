import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";
import { UserScreen } from "../screens/UserScreen";
import { MasterScreen } from "../screens/MasterScreen";

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="MasterScreen" component={MasterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);