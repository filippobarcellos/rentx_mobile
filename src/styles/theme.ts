import { RFValue } from "react-native-responsive-fontsize";

export default {
  colors: {
    primary: "#DC1637",
    green: "#03B252",
    black: "#1B1B1F",
    white: "#FFFFFF",
    text: {
      red: "#FF99AA",
      text: "#7A7A80",
      details: "#AEAEB3",
      title: "#47474D",
      black: "#DEDEE3",
      primary: "#F4F5F6",
      secondary: "#EBEBF0",
    },
    shapes: {
      black: "#29292E",
    },
  },
  fonts: {
    family: {
      primary_400: "Inter_400Regular",
      primary_500: "Inter_500Medium",
      secondary_400: "Archivo_400Regular",
      secondary_500: "Archivo_500Medium",
      secondary_600: "Archivo_600SemiBold",
    },
    sizes: {
      xxlarge: `${RFValue(40)}px`,
      xlarge: `${RFValue(30)}px`,
      large: `${RFValue(25)}px`,
      medium: `${RFValue(15)}px`,
      small: `${RFValue(10)}px`,
    },
  },
};
