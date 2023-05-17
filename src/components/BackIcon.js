import { View, Text, Image } from "react-native";
import React from "react";

const BackIcon = () => {
  return (
    <View>
      <Image
        source={require("../image/Back.png")}
        style={{
          height: 35,
          width: 35,
          marginTop: 45,
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default BackIcon;
