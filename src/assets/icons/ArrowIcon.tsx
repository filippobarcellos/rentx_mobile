import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {}

const ArrowIcon = ({ ...rest }: Props) => {
  return (
    <Svg width="48" height="10" viewBox="0 0 48 10" fill="none" {...rest}>
      <Path
        d="M45.5118 4.35716L42.0252 0.908974L42.9443 0L48 5L42.9443 10L42.0252 9.09103L45.5118 5.64284H0V4.35716L45.5118 4.35716Z"
        fill="#7A7A80"
      />
    </Svg>
  );
};

export default ArrowIcon;
