import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "../styles";

const RecipeDetails = ({ meal, onBack }) => {
  // Helper function to get ingredients and their amounts
  const getIngredients = () => {
    let ingredients = [];
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={onBack} style={styles.backButtonContainer}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      {/* Recipe Image */}
      <Image source={{ uri: meal.strMealThumb }} style={styles.detailImage} resizeMode="cover" />

      {/* Recipe Title */}
      <Text style={styles.headerTitle}>{meal.strMeal}</Text>

      {/* Recipe Ingredients */}
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <ScrollView style={styles.ingredientsContainer}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}>
        
        {getIngredients().map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}
      </ScrollView>

      {/* Recipe Instructions */}
      <Text style={styles.instructionsTitle}>Instructions:</Text>
      <ScrollView style={styles.instructionsContainer}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}>
        <Text style={styles.instructionsText}>{meal.strInstructions}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;

