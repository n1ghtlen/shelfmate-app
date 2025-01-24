import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './WelcomeScreen';
import QuestionnaireScreen from './QuestionnaireScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';

// Tab Navigator for Home Screen
const Tab = createBottomTabNavigator();

// Stack Navigator to handle the flow from WelcomeScreen to HomeScreen
const Stack = createStackNavigator();

function App() {
  // loads in Roboto font
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
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
        <Stack.Screen name="Sign Up" component={SignupScreen} initialParams={({ styles })}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} initialParams={{ styles }}/>
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} initialParams={{ styles }}/>
        <Stack.Screen name="Log In" component={LoginScreen} initialParams={{ styles }}/>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ styles }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Regular',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#A86000',
    textAlign: 'center',
    paddingBottom: 200,
  },
  image: { // space between image and text
    width: 300,
    height: 300,
    objectFit: 'contain',
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#555',
    textAlign: 'center',
  },
  topTextBackground: {
    width: '100%',
    height: '25%',
    backgroundColor: '#025400',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 30,
    marginTop: 30,
  },
  questionText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    height: '35%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingTop: 230,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 80,
  },
  buttons: {
    flex: 1,
    width: 120,
    height: 60,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: '#025400'
  },
  loginBackground: {
    width: '75%',
    height: '60%',
    backgroundColor: "#A86000",
    borderRadius: 15,
    alignItems: 'center',
  },
  loginHeading: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    paddingTop: 20,
    marginBottom: 80,
  },
  inputBox: {
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
    paddingLeft: 10,
  },
  inputText: {
    paddingTop: 10,
  }
});

export default App;
