import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import VictoryPie from "../../lib/components/victory-pie";

const components = [
  { component: VictoryPie, name: "VictoryPie" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});
