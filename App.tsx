import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import theme from "./src/styles/theme";

import EditProfile from "./src/modules/User/Edit";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <EditProfile />
    </ThemeProvider>
  );
}
