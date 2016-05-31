import React from "react";
import { Path } from "react-native-svg";
import Slice from "victory-pie/src/components/slice";

export default class extends Slice {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderSlice(props) {
    return (
      <Path
        d={props.pathFunction(props.slice)}
        fill={props.style.fill}
        fillOpacity={props.style.opacity}
        {...this.getStrokeStyles(props.style)}
        {...props.events}
      />
    );
  }
}
