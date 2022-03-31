import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const { width: SIZE } = Dimensions.get("window");

import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function Charts() {
  return (
    <Chart
      style={{ height: 250, width: SIZE }}
      data={[
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
      ]}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <Area
        theme={{
          gradient: {
            from: { color: "#ffa502", opacity: 0.5 },
            to: { color: "#ffa502", opacity: 0 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#ffa502", width: 4 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
        smoothing="line"
      />
    </Chart>
  );
}
