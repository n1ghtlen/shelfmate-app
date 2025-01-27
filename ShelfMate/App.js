import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { Checkbox } from "expo-checkbox";
import Icon from "react-native-vector-icons/Ionicons";
import WelcomeScreen from "./WelcomeScreen";
import QuestionnaireScreen from "./QuestionnaireScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import RecipeScreen from "./RecipeScreen";
import styles from "./styles";

// Tab Navigator for Home Screen
const Tab = createBottomTabNavigator();

// Stack Navigator to handle the flow from WelcomeScreen to HomeScreen
const Stack = createStackNavigator();

function App() {
  // loads in Roboto font
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  // checks to make sure font is loaded before content is shown
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Sign Up"
          component={SignupScreen}
          initialParams={{ styles }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          initialParams={{ styles }}
        />
        <Stack.Screen
          name="Questionnaire"
          component={QuestionnaireScreen}
          initialParams={{ styles }}
        />
        <Stack.Screen
          name="Log In"
          component={LoginScreen}
          initialParams={{ styles }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ styles }}
        />
        <Stack.Screen
            name="Recipes"
            component={RecipeScreen}
            initialParams={{ styles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
