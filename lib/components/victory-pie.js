import React from "react";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "victory-core-native";
import { VictoryPie } from "victory-pie/src";
import Slice from "./slice";

export default class extends VictoryPie {
  static defaultProps = {
    ...VictoryPie.defaultProps,
    dataComponent: <Slice />,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>
  };

  renderGroup(groupProps, slices) {
    const {style, xOffset, yOffset} = groupProps;
    return React.cloneElement(
      this.props.groupComponent,
      Object.assign({ role: "presentation", x: xOffset, y: yOffset, style: style.parent}),
      slices
    );
  }
}
