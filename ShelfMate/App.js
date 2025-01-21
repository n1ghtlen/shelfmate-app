import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function WelcomeScreen({ navigation }) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('Questionnaire')}
    >
      <Text style={styles.welcome}>Welcome!</Text>
      <Image
        source={require('./canary.png')}
        style={styles.image}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  );
}

// Questionnaire Screen (Tap welcome screen to get here)
function QuestionnaireScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topTextBackground}>
        <Text style={styles.topText}>Welcome to ShelfMate! 
          Please answer the following questions to tailor your experience.</Text>
      </View>
    </View>
  );
}

// Tab Navigator for Home Screen
const Tab = createBottomTabNavigator();

// Stack Navigator to handle the flow from WelcomeScreen to HomeScreen
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  image: {
    marginBottom: 20, // space between image and text
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
});

export default App;
