import React from "react";
import Svg, { G } from "react-native-svg";
import { VictoryLabel } from "victory-core-native";
import { VictoryPie } from "victory-pie/src";
import Slice from "./slice";

export default class extends VictoryPie {
  static defaultProps = {
    ...VictoryPie.defaultProps,
    height: 300,
    width: 300,
    dataComponent: <Slice />,
    labelComponent: <VictoryLabel />
  };

  renderSlice(index, component, label) {
    return (
      <G key={`slice-group-${index}`}>
        {component}
        {label}
      </G>
    );
  }

  renderGroup({style, xOffset, yOffset, calculatedProps}) {
    return (
      <G style={style} x={xOffset} y={yOffset}>
        {this.renderData(this.props, calculatedProps)}
      </G>
    );
  }

  renderStandalone(style, group) {
    return (
      <Svg
        viewbox={`0 0 ${this.props.width} ${this.props.height}`}
        width={this.props.width}
        height={this.props.height}
        {...this.props.events.parent}
      >
        {group}
      </Svg>
    );
  }
}
