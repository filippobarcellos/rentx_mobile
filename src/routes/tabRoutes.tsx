import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import CarRoutes from "./carStack";
import ProfileRoutes from "./profileStack";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from "react-native";
import CarIcon from "../assets/icons/Car";
import UserIcon from "../assets/icons/User";
import List from "../../features/Cars/List";

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.text.primary,
          height: Platform.OS === "ios" ? getBottomSpace() + 60 : 60,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={List}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="CarTab"
        component={CarRoutes}
        options={{
          tabBarIcon: ({ color }) => <CarIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileRoutes}
        options={{
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) => <Feather size={24} {...props} />;

export default TabRoutes;
