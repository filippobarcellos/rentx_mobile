import React from "react";
import Accessory from "../Accessory";

import AccelerationIcon from "../../assets/icons/Acceleration";
import PeopleIcon from "../../assets/icons/People";

import * as S from "./styles";

const Features = () => {
  return (
    <S.Container>
      <Accessory name="380 km/h" icon={AccelerationIcon} />
      <Accessory name="380 km/h" icon={PeopleIcon} />
      <Accessory name="380 km/h" icon={AccelerationIcon} />
      <Accessory name="380 km/h" icon={AccelerationIcon} />
      <Accessory name="380 km/h" icon={AccelerationIcon} />
      <Accessory name="380 km/h" icon={AccelerationIcon} />
    </S.Container>
  );
};

export default Features;
