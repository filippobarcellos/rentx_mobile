import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import Button from "../../../shared/components/Button";
import Slider from "../../../shared/components/Slider";
import Accessory from "../../../shared/components/Accessory";

import { useCars } from "../../../shared/context/useCar";
import { getAccessoryIcon } from "../../../shared/utils/getAccessoryIcon";

import * as S from "./styles";

const Details = () => {
  const { navigate } = useNavigation();
  const { selectedCar } = useCars();
  const { photos, brand, name, rent, accessories, about } = selectedCar;

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        scrollY.value,
        [0, 100, 200],
        [0, -40, -70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 25, 50, 150],
        [1, 0.3, 0.2, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const navigateToSchedule = () => {
    navigate("Schedule");
  };

  return (
    <S.Wrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View style={[headerStyleAnimation, styles.header]}>
        <S.Header>
          <Animated.View style={sliderStyleAnimation}>
            <Slider photos={photos} />
          </Animated.View>
        </S.Header>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          marginTop: 24,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <S.Group>
          <S.TextGroup>
            <S.Brand>{brand}</S.Brand>
            <S.Name>{name}</S.Name>
          </S.TextGroup>

          <S.TextGroup>
            <S.Period>{rent.period}</S.Period>
            <S.Price>$ {rent.price}</S.Price>
          </S.TextGroup>
        </S.Group>

        <S.Features>
          {accessories.map(({ type, name }) => (
            <Accessory key={type} icon={getAccessoryIcon(type)} name={name} />
          ))}
        </S.Features>

        <S.Description>{about}</S.Description>
      </Animated.ScrollView>

      <Animated.View>
        <S.ButtonWrapper>
          <Button onPress={navigateToSchedule}>Rent</Button>
        </S.ButtonWrapper>
      </Animated.View>
    </S.Wrapper>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  slider: {
    marginTop: 24,
  },
});
