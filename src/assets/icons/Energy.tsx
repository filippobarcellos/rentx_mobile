import React from "react";
import Svg, { Path, Rect, SvgProps, Defs, G, ClipPath } from "react-native-svg";

interface Props extends SvgProps {}

const EnergyIcon = ({ ...rest }: Props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <G clip-path="url(#clip0)">
        <Path
          d="M12.5263 8H22L10.4211 25V16H2L12.5263 -1V8ZM10.4211 10V6.22L5.7179 14H12.5263V18.394L18.0663 10H10.4211Z"
          fill="#41414D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EnergyIcon;
