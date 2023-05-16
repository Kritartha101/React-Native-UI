import { View, Text, Image } from "react-native";
import React from "react";
import Dot from "../components/Dot";
const FoodScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
      <View style={{ flex: 1.2, backgroundColor: "#EDEADE" }}>
        <Image
          source={require("../image/Image.png")}
          style={{
            height: 400,
            width: 350,
            marginTop: 50,
            alignSelf: "center",
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Dot />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text>Mc Donalds</Text>
        <Text>Double Cheese Burger</Text>
      </View>
    </View>
  );
};

export default FoodScreen;
https://www.uplabs.com/posts/food-delivery-app-ui-design-ecommerce-food-app