import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Top = () => {
  return (
    <View style={styles.top}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="setting" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
