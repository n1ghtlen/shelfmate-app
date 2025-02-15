import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";

// Import screens & navigators
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import QuestionnaireScreen from "./screens/QuestionnaireScreen";
import LoginScreen from "./screens/LoginScreen";
import ScanScreen from "./screens/ScanScreen";
import ScanResultScreen from "./screens/ScanResultScreen";
import TabNavigator from "./TabNavigator"; // Import the Tab Navigator
import styles from "./styles";

const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

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
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        {/* Ensures that Back button on Results screen can navigate back to Scan screen. */}
        <Stack.Screen name="Scan Results" component={ScanResultScreen} />
        {/* This wraps your main app screens inside the Tab Navigator */}
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
