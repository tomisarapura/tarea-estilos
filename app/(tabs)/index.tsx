import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>
      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});

export default MainPage;
