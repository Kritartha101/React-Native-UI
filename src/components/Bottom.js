import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../constants/Card";

const Bottom = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
        Complete Profile
      </Text>
      <Card />
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
