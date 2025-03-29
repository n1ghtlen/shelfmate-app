import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import RecipeDetails from "./RecipeDetails"; // Import RecipeDetails
import styles from "../styles";

const { width, height } = Dimensions.get("window");

const staticRecipeIDs = [52772, 52844, 52977]; // Three specific MealDB recipe IDs

const RecipeScreen = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [availableRecipes, setAvailableRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Store selected recipe

  useEffect(() => {
    fetchSavedRecipes();
    fetchAvailableRecipes();
  }, []);

  const fetchSavedRecipes = async () => {
    try {
      const recipePromises = staticRecipeIDs.map((id) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) =>
          res.json()
        )
      );
      const results = await Promise.all(recipePromises);
      const recipes = results.map((result) => result.meals[0]);
      setSavedRecipes(recipes);
    } catch (error) {
      console.error("Error fetching saved recipes:", error);
    }
  };

  const fetchAvailableRecipes = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const data = await response.json();
      if (data.meals) {
        setAvailableRecipes(data.meals.slice(0, 9)); // Limit to 9 recipes
      }
    } catch (error) {
      console.error("Error fetching available recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset selected recipe (go back to main list)
  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/background-2.png")} style={styles.backgroundImage}>
        {selectedRecipe ? ( 
          <RecipeDetails meal={selectedRecipe} onBack={handleBack} /> // Shows RecipeDetails if a recipe is selected
        ) : (
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
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
              {savedRecipes.length === 0 ? (
                <ActivityIndicator size="large" color="#000" />
              ) : (
                savedRecipes.map((meal, index) => (
                  <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => setSelectedRecipe(meal)}>
                    <Image source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode="cover" />
                    <Text style={styles.imageTitle}>{meal.strMeal}</Text>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>

            {/* API Fetched Recipes */}
            <Text style={styles.sectionTitle}>Discover New Recipes</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : (
              <ScrollView contentContainerStyle={styles.gridContainer}>
                {availableRecipes.map((meal, index) => (
                  <TouchableOpacity key={index} style={styles.gridItem} onPress={() => setSelectedRecipe(meal)}>
                    <Image source={{ uri: meal.strMealThumb }} style={styles.gridImage} resizeMode="cover" />
                    <Text style={styles.imageTitle}>{meal.strMeal}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default RecipeScreen;




