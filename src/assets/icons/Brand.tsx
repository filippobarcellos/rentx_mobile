import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {}

const Brand = ({ ...rest }: Props) => {
  return (
    <Svg width="80" height="50" viewBox="0 0 80 50" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.3732 14.9428L0.840557 0.408832L0 0V10.5581L19.6476 20.2269L30.3732 14.9428ZM79.9997 49.9288V39.3707L60.4222 29.7427L49.7054 35.0269L79.9997 49.9288ZM79.1682 0.408604L80 0.0100098V10.5681L50.7563 24.9793L40.0394 30.2635L0 49.9998V39.4315L29.3138 24.9896L40.0306 19.6952H40.0394L79.1682 0.408604Z"
        fill="#DC1637"
      />
    </Svg>
  );
};

export default Brand;
