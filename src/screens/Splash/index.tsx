import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import logo from "../../shared/assets/Logotipo.png";

import * as S from "./styles";

const Splash = () => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [0, 0.3, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const navigateToStart = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "App",
          },
        ],
      })
    );
  };

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 }, () => {
      "worklet";
      runOnJS(navigateToStart)();
    });
  }, []);

  return (
    <S.Container>
      <Animated.View style={logoStyle}>
        <Image source={logo} />
      </Animated.View>
    </S.Container>
  );
};

export default Splash;
