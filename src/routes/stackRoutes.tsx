import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Done from "../modules/Cars/Done";
import List from "../modules/Cars/List";
import Details from "../modules/Cars/Details";
import Schedule from "../modules/Cars/Schedule";
import Confirmation from "../modules/Cars/Confirmation";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator initialRouteName="List" screenOptions={{ headerShown: false }}>
      <Screen name="List" component={List} />
      <Screen name="Details" component={Details} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Done" component={Done} />
    </Navigator>
  );
};

export default StackRoutes;
