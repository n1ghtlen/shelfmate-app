import React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("window");

const images = [
  require("./assets/"),
  require("./assets/"),
  require("./assets/"),
];

const ScrollableImagePage = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          style={styles.image}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
  },
  image: {
    width: width,
    height: "100%",
  },
});

export default ScrollableImagePage;
