import { View, Text } from "react-native";
import React from "react";

const Dot = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        margin: 5,
        gap: 9,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          flex: 0.0,
          height: 6,
          width: 6,
          backgroundColor: "#808080",
        }}
      ></View>
      <View
        style={{
          flex: 0.0,
          height: 6,
          width: 6,
          backgroundColor: "#808080",
        }}
      ></View>
      <View
        style={{
          flex: 0.0,
          height: 6,
          width: 6,
          backgroundColor: "#808080",
        }}
      ></View>
      <View
        style={{
          flex: 0.0,
          height: 6,
          width: 6,
          backgroundColor: "#808080",
        }}
      ></View>
      <View
        style={{
          flex: 0.0,
          height: 6,
          width: 6,
          backgroundColor: "red",
        }}
      ></View>
    </View>
  );
};

export default Dot;
