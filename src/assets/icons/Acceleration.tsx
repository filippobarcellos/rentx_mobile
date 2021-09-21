import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {}

const AccelerationIcon = ({ ...rest }: Props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        d="M4 27.2632H28V30H4V27.2632ZM17.3333 7.23832V22.5263H14.6667V7.23832L6.572 15.5474L4.68667 13.6124L16 2L27.3133 13.6111L25.428 15.546L17.3333 7.24105V7.23832Z"
        fill="#47474D"
      />
    </Svg>
  );
};

export default AccelerationIcon;
