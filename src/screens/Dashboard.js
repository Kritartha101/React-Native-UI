import { View, Text, StyleSheet, Image, Button, StatusBar } from "react-native";
import React from "react";
import DotIcon from "../components/DotIcon";

const Dashboard = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image source={require("../image/deliver.png")} style={styles.image} />
      <Text style={styles.head}>The Fastest Food Delivery</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
      </Text>
      <DotIcon />
      <View style={styles.button}>
        <Button title="Get Started" color="#fff" />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  head: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 60,
    width: 180,
    padding: 7,
  },
});
