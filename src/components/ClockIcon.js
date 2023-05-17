import { View, Text, Image } from "react-native";
import React from "react";

const ClockIcon = () => {
  return (
    <View>
      <Image
        source={require("../image/clock.png")}
        style={{
          height: 35,
          width: 35,
        }}
      />
    </View>
  );
};

export default ClockIcon;
