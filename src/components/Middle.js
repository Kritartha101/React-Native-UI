import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Middle = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/Images/user.jpg")}
        />
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Alena Dorcas
        </Text>
        <Text style={{ fontSize: 16, color: "fc0000", fontWeight: "500" }}>
          abenadorcas@gmail.com
        </Text>
      </View>
      <View style={styles.mtext}>
        <View style={styles.mselectiontext}>
          <Text style={styles.toptext}>Applied</Text>
          <Text style={styles.bottomtext}>28</Text>
        </View>
        <View style={styles.mselectiontext}>
          <Text style={styles.toptext}>Reviewed</Text>
          <Text style={styles.bottomtext}>73</Text>
        </View>
        <View style={styles.mselectiontext}>
          <Text style={styles.toptext}>Contacted</Text>
          <Text style={styles.bottomtext}>18</Text>
        </View>
      </View>
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 5,
  },
  mtext: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  mselectiontext: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  bottomtext: {
    fontSize: 16,
    color: "fc0000",
    fontWeight: "700",
  },
});
