import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
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
    setIsSaved((prev) => !prev); // Toggle state
  };

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

  const formatInstructions = (instructions) => {
    const sentences = instructions.split(". "); // Split sentences by period
    return sentences.map((sentence, index) => (
      <Text key={index} style={styles.instructionsText}>
        {sentence.trim()}. {/* Re-add period and indent */}
      </Text>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButtonContainer}>
          <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      {/* Recipe Image */}
      <Image source={{ uri: meal.strMealThumb }} style={styles.detailImage} resizeMode="cover" />

      {/* Recipe Title */}
      <Text style={styles.recipeTitle}>{meal.strMeal}</Text>


        {/* Heart Icon for Saving/Unsaving */}
        <TouchableOpacity onPress={handleSaveToggle} style={styles.heartButton}>
          <Ionicons 
            name={isSaved ? "heart" : "heart-outline"} 
            size={28} 
            color="red" 
          />
        </TouchableOpacity>

      {/* Recipe Ingredients */}
      <ScrollView style = {{backgroundColor: "#fff"}}>
        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <View style={styles.ingredientsContainer}
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}>
          {getIngredients().map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>

        {/* Recipe Instructions */}
        <Text style={styles.instructionsTitle}>Instructions:</Text>
        <View style={styles.instructionsContainer}>
          {formatInstructions(meal.strInstructions)}
        </View>
      </ScrollView>
      </SafeAreaView>
  );
};

export default RecipeDetails;


