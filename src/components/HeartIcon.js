import { View, Text, Image } from "react-native";
import React from "react";

const heartIcon = () => {
  return (
    <View>
      <Image
        source={require("../image/heart.png")}
        style={{
          height: 35,
          width: 35,
          marginLeft: 325,
          marginTop: 45,
        }}
      />
    </View>
  );
};

export default heartIcon;
