import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import RecipeDetails from "./RecipeDetails";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const staticRecipeIDs = [52772, 52844, 52977];

const RecipeScreen = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [availableRecipes, setAvailableRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
        setAvailableRecipes(data.meals.slice(0, 9));
      }
    } catch (error) {
      console.error("Error fetching available recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRecipeSave = (meal) => {
    setSavedRecipes((prevRecipes) => {
      const isAlreadySaved = prevRecipes.some((recipe) => recipe.idMeal === meal.idMeal);
      return isAlreadySaved
        ? prevRecipes.filter((recipe) => recipe.idMeal !== meal.idMeal)
        : [...prevRecipes, meal];
    });
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {selectedRecipe ? (
        <RecipeDetails
          meal={selectedRecipe}
          onBack={handleBack}
          toggleRecipeSave={toggleRecipeSave}
          isSaved={savedRecipes.some((recipe) => recipe.idMeal === selectedRecipe.idMeal)}
        />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Recipes</Text>
          </View>

          {/* Saved Recipes */}
          <Text style={styles.sectionTitle}>Saved Recipes</Text>
          <View style={styles.savedRecipesWrapper}>
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
                  <TouchableOpacity
                    key={index}
                    style={styles.imageContainer}
                    onPress={() => setSelectedRecipe(meal)}
                  >
                    <Image
                      source={{ uri: meal.strMealThumb }}
                      style={styles.savedRecipeImage}
                    />
                    <LinearGradient
                      colors={["transparent", "rgba(0,128,0,0.4)"]}
                      style={styles.gradientOverlay}
                    />
                    <Text style={styles.imageTitle}>{meal.strMeal}</Text>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>

          {/* Discover Recipes */}
          <Text style={styles.sectionTitle}>Discover New Recipes</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <ScrollView contentContainerStyle={styles.gridContainer}>
              {availableRecipes.map((meal, index) => (
                <View key={index} style={styles.gridItem}>
                  <TouchableOpacity onPress={() => setSelectedRecipe(meal)}>
                    <Image
                      source={{ uri: meal.strMealThumb }}
                      style={styles.discoverImage}
                    />
                    <Text style={styles.imageTitle}>{meal.strMeal}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => toggleRecipeSave(meal)}>
                    <Ionicons
                      name={
                        savedRecipes.some(
                          (recipe) => recipe.idMeal === meal.idMeal
                        )
                          ? "heart"
                          : "heart-outline"
                      }
                      size={24}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};

export default RecipeScreen;
