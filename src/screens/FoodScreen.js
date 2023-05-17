import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import DotIcon from "../components/DotIcon";
import BackIcon from "../components/BackIcon";
import HeartIcon from "../components/HeartIcon";
import StarIcon from "../components/StarIcon";
import ClockIcon from "../components/ClockIcon";

const FoodScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
      <View style={{ flex: 2, backgroundColor: "#FEFEFA" }}>
        <View flexDirection="row">
          <BackIcon />
          <HeartIcon />
        </View>
        <Image
          source={require("../image/Image.png")}
          style={{
            height: 400,
            width: 350,
            alignSelf: "center",
          }}
        />
        <View>
          <DotIcon />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 8 }}>
          <Text style={{ fontSize: 17 }}>Mc Donalds </Text>
          <StarIcon />
          <Text
            style={{
              marginLeft: 123,
              fontSize: 18,
              fontWeight: "600",
              marginTop: 3,
            }}
          >
            NPR 499
          </Text>
        </View>

        <Text style={{ fontSize: 25, marginLeft: 8, fontWeight: "500" }}>
          Double Cheese Burger
        </Text>
        <Text style={{ marginLeft: 8, marginTop: 15, fontSize: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        <View style={{ flexDirection: "row", marginTop: 35, marginLeft: 8 }}>
          <ClockIcon />
          <Text style={{ fontSize: 18, margin: 7, fontWeight: "500" }}>
            Delivery Time :
          </Text>
          <Text style={{ fontSize: 18, margin: 7 }}> 30 Min</Text>
        </View>
      </View>
      <View
        style={{ flex: 0.3, backgroundColor: "#F5F5F5", flexDirection: "row" }}
      >
        <View
          style={{
            flex: 0.4,
            height: 36,
            backgroundColor: "#808080",
            marginLeft: 30,
            marginTop: 12,
            borderRadius: 120,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 35,
              color: "#fff",
            }}
          >
            -
          </Text>
        </View>
        <Text style={{ marginTop: 21, margin: 10, fontSize: 18 }}> 5</Text>

        <View
          style={{
            flex: 0.4,
            height: 36,
            backgroundColor: "red",

            marginTop: 12,
            borderRadius: 120,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 35,
              color: "#fff",
            }}
          >
            +
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "red",
            padding: 9,
            borderRadius: 10,
            height: 40,
            marginLeft: 170,
            marginTop: 12,
          }}
        >
          <Text style={{ color: "#fff" }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodScreen;

const style = StyleSheet.create({
  text: {},
});
