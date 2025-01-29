import React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import styles from "../styles";

const { width } = Dimensions.get("window");

const savedImages = [
  { source: require("../assets/cinnamon-roll.jpg"), title: "Recipe 1" },
  { source: require("../assets/dulce-de-leche.jpg"), title: "Recipe 2" },
  { source: require("../assets/turkish-coffee.jpg"), title: "Recipe 3" },
];

const availableImages = [
  { source: require("../assets/cinnamon-roll.jpg"), title: "Recipe 4" },
  { source: require("../assets/dulce-de-leche.jpg"), title: "Recipe 5" },
  { source: require("../assets/turkish-coffee.jpg"), title: "Recipe 6" },
];

const RecipeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Recipes</Text>
        </View>

        {/* Saved Recipes Section */}
        <Text style={styles.sectionTitle}>Saved Recipes</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {savedImages.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={image.source}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.imageTitle}>{image.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Available Recipes Section */}
        <Text style={styles.sectionTitle}>Available Recipes</Text>
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {availableImages.map((image, index) => (
            <View key={index} style={styles.gridItem}>
              <Image
                source={image.source}
                style={styles.gridImage}
                resizeMode="cover"
              />
              <Text style={styles.imageTitle}>{image.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipeScreen;
