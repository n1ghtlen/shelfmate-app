import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";

const RecipeDetails = ({ meal, onBack, savedRecipes, toggleRecipeSave }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (Array.isArray(savedRecipes)) {
      setIsSaved(savedRecipes.some((recipe) => recipe.idMeal === meal.idMeal));
    } else {
      setIsSaved(false);
    }
  }, [savedRecipes, meal]);

  const handleSaveToggle = () => {
    toggleRecipeSave(meal);
    setIsSaved((prev) => !prev);
  };

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      } else {
        break;
      }
    }
    return ingredients;
  };

  const formatInstructions = (instructions) => {
    return instructions.split(". ").map((sentence, index) => (
      <Text key={index} style={styles.instructionsText}>
        {sentence.trim()}.
      </Text>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Recipe Image */}
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.detailImage}
        resizeMode="cover"
      />

      {/* Floating Back Button */}
      <TouchableOpacity onPress={onBack} style={styles.backOverlay}>
        <Ionicons name="arrow-back" size={28} color="#333" />
      </TouchableOpacity>

      {/* Floating Heart Button */}
      <TouchableOpacity onPress={handleSaveToggle} style={styles.heartOverlay}>
        <Ionicons
          name={isSaved ? "heart" : "heart-outline"}
          size={32}
          color="red"
        />
      </TouchableOpacity>

      {/* Scrollable content */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.recipeTitle}>{meal.strMeal}</Text>

          <Text style={styles.ingredientsTitle}>Ingredients:</Text>
          <View style={styles.ingredientsContainer}>
            {getIngredients().map((ingredient, index) => (
              <Text key={index} style={styles.ingredient}>
                {ingredient}
              </Text>
            ))}
          </View>

          <Text style={styles.instructionsTitle}>Instructions:</Text>
          <View style={styles.instructionsContainer}>
            {formatInstructions(meal.strInstructions)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default RecipeDetails;
