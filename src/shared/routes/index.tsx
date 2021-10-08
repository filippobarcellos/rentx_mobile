import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tabRoutes";

import Splash from "../../features/Splash";
import Details from "../../features/Cars/Details";
import Schedule from "../../features/Cars/Schedule";
import Confirmation from "../../features/Cars/Confirmation";
import Done from "../../features/Cars/Done";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="App" component={TabRoutes} />
      <AppStack.Screen name="Splash" component={Splash} />
      <AppStack.Screen name="Details" component={Details} />
      <AppStack.Screen name="Schedule" component={Schedule} />
      <AppStack.Screen name="Confirmation" component={Confirmation} />
      <AppStack.Screen name="Done" component={Done} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent />
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
