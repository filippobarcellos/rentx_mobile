import React, { useState, useRef } from "react";
import { FlatList, ViewToken, useWindowDimensions } from "react-native";
import BackButton from "../BackButton";

import * as S from "./styles";

type SliderProps = {
  photos: string[];
};

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

const Slider = ({ photos }: SliderProps) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const onImageSlide = useRef((info: ChangeImageProps) => {
    setActiveIndex(info.viewableItems[0].index!);
  });

  return (
    <S.Container>
      <S.Group>
        <BackButton />
        <S.IndexGroup>
          {photos.map((p, index) => (
            <S.Index key={p} active={index === activeIndex} />
          ))}
        </S.IndexGroup>
      </S.Group>

      <FlatList
        data={photos}
        keyExtractor={(item) => String(item)}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onImageSlide.current}
        renderItem={({ item }) => <S.Image source={{ uri: item }} />}
      />
    </S.Container>
  );
};

export default Slider;
