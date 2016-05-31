/* global setInterval */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from "lodash";
import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
} from "react-native";
import { VictoryPie } from "../lib";

VictoryPie.defaultProps = {
  ...VictoryPie.defaultProps,
  height: 300,
  width: 300
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd"
  }
});

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.generateRandomData()
    };
  }
  componentWillMount() {
    setInterval(() => {
      this.setState({data: this.generateRandomData()});
    }, 2000);
  }
  generateRandomData() {
    return _.range(1, 7).map(() => ({x: null, y: _.random(1, 10)}));
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <VictoryPie
          innerRadius={75}
          data={this.state.data}
          animate={{
            duration: 800,
            data: this.state.data
          }}
        />
        <VictoryPie
          data={[
            {animal: "Cat", pet: 45, wild: 17},
            {animal: "Dog", pet: 85, wild: 6},
            {animal: "Fish", pet: 55, wild: 0},
            {animal: "Bird", pet: 15, wild: 40}
          ]}
          x="animal"
          y={(data) => data.pet + data.wild}
        />
        <VictoryPie
          style={{
            labels: {
              fontSize: 15,
              padding: 75
            }
          }}
        />
        <VictoryPie
          style={{
            data: {
              stroke: "none",
              opacity: 0.3
            }
          }}
        />
        <VictoryPie innerRadius={90} />
        <VictoryPie
          endAngle={90}
          startAngle={-90}
        />
        <VictoryPie
          endAngle={90}
          innerRadius={90}
          padAngle={5}
          startAngle={-90}
        />
        <VictoryPie
          style={{
            labels: {
              fill: "white",
              fontSize: 10,
              fontWeight: "bold"
            }
          }}
          data={[
            {x: "<5", y: 6279},
            {x: "5-13", y: 9182},
            {x: "14-17", y: 5511},
            {x: "18-24", y: 7164},
            {x: "25-44", y: 6716},
            {x: "45-64", y: 4263},
            {x: "≥65", y: 7502}
          ]}
          innerRadius={70}
          colorScale={[
            "#D85F49",
            "#F66D3B",
            "#D92E1D",
            "#D73C4C",
            "#FFAF59",
            "#E28300",
            "#F6A57F"
          ]}
        />
        <VictoryPie
          style={{
            data: {
              stroke: (data) => data.y > 75 ? "black" : "transparent",
              opacity: (data) => data.y > 75 ? 1 : 0.4
            }
          }}
          data={[
            {x: "Cat", y: 62},
            {x: "Dog", y: 91},
            {x: "Fish", y: 55},
            {x: "Bird", y: 55}
          ]}
        />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("Demo", () => Demo);
