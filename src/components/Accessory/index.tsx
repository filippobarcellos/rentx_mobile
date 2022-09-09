import React from "react";
import { SvgProps } from "react-native-svg";

import * as S from "./styles";

type AccessoryProps = {
  icon: React.FC<SvgProps>;
  name: string;
};

const Accessory = ({ icon: Icon, name }: AccessoryProps) => {
  return (
    <S.Container>
      <Icon />
      <S.Text>{name}</S.Text>
    </S.Container>
  );
};

export default Accessory;
