import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.welcome}>Welcome!</Text>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>tap to continue</Text>
    </View>
  </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  )
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
});
