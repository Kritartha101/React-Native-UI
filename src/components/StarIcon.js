import { View, Text, Image } from "react-native";
import React from "react";

const StarIcon = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../image/Star.png")}
        style={{ height: 20, width: 20, margin: 1 }}
      />
      <Image
        source={require("../image/Star.png")}
        style={{ height: 20, width: 20, margin: 1 }}
      />
      <Image
        source={require("../image/Star.png")}
        style={{ height: 20, width: 20, margin: 1 }}
      />
      <Image
        source={require("../image/Star.png")}
        style={{ height: 20, width: 20, margin: 1 }}
      />
      <Image
        source={require("../image/Star2.jpeg")}
        style={{ height: 20, width: 20, margin: 1 }}
      />
    </View>
  );
};

export default StarIcon;
