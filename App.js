import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Middle from "./src/components/Middle";
import Top from "./src/components/Top";
import Bottom from "./src/components/Bottom";
import Size from "./src/constants/Size";

export default function App() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("./assets/Images/bg.png")}
      >
        <View style={styles.container}>
          <Top />
          <Middle />
          <Bottom />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: Size.medium,
    marginTop: Size.safe,
  },
});
