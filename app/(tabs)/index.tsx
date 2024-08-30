import React from "react";

import {
  Image,
  StyleSheet,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

//import { HelloWave } from "@/components/HelloWave";
//import ParallaxScrollView from "@/components/ParallaxScrollView";
//import { ThemedText } from "@/components/ThemedText";
//import { ThemedView } from "@/components/ThemedView";
//import { useState } from "react";

export default function HomeScreen() {
  return (
    <View>
      <Text>Index</Text>
      <Pressable onPress={() => console.log("Pressed")}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
}
