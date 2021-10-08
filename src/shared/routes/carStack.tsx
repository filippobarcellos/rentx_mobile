import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Done from "../../features/Cars/Done";

const CarStack = createNativeStackNavigator();

const CarRoutes = () => {
  return (
    <CarStack.Navigator
      initialRouteName="Done"
      screenOptions={{ headerShown: false }}
    >
      <CarStack.Screen name="Done" component={Done} />
    </CarStack.Navigator>
  );
};

export default CarRoutes;
