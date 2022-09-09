import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../features/Auth/Login";
import Register from "../../features/Auth/Register";
import EditProfile from "../../features/User/Edit";
import Profile from "../../features/User/Profile";

const ProfileStack = createNativeStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Login" component={Login} />
      <ProfileStack.Screen name="Register" component={Register} />
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
