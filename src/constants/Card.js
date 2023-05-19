import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
      }}
    >
      <View style={styles.flex1}>
        <FontAwesome
          style={{ margin: 10 }}
          name="graduation-cap"
          size={50}
          color="black"
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            margin: 5,
            marginBottom: 15,
          }}
        >
          Education
        </Text>
        <Text style={{ fontSize: 20, color: "#fff", margin: 2 }}>02 Steps</Text>
        <View style={{ flexDirection: "row", margin: 2, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>ReViewed</Text>
          <AntDesign
            style={{ marginLeft: 20 }}
            name="arrowright"
            size={30}
            color="#fff"
          />
        </View>
      </View>

      <View style={styles.flex2}>
        <FontAwesome
          style={{ margin: 10 }}
          name="suitcase"
          size={50}
          color="black"
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            margin: 5,
            marginBottom: 15,
          }}
        >
          Professional
        </Text>
        <Text style={{ fontSize: 20, color: "#fff", margin: 2 }}>04 Steps</Text>
        <View style={{ flexDirection: "row", margin: 2, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>ReViewed</Text>
          <AntDesign
            style={{ marginLeft: 20 }}
            name="arrowright"
            size={30}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  flex1: {
    flex: 0.45,
    height: 190,
    backgroundColor: "red",
    borderRadius: 16,
    margin: 5,
  },
  flex2: {
    flex: 0.45,
    height: 190,
    backgroundColor: "green",
    borderRadius: 16,
    margin: 5,
  },
});
