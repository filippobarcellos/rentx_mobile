import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {}

const GearIcon = ({ ...rest }: Props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.85714 2.00001L6 2.00001L6 17.4447L6.00002 17.4447L6.00002 30.0001L8.85716 30.0001L8.85716 17.4447L14.5714 17.4447L14.5714 30.0001L17.4286 30.0001L17.4286 17.4447L26 17.4447L26 17.4444L26 17.4444L26 14.5555L26 14.5555L26 2.00001L23.1428 2.00001L23.1428 14.5555L17.4286 14.5555L17.4286 2.00001L14.5714 2.00001L14.5714 14.5555L8.85714 14.5555L8.85714 2.00001Z"
        fill="#47474D"
      />
    </Svg>
  );
};

export default GearIcon;
