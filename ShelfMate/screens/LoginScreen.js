import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import styles from '../styles';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState(''); // State to store the username input
    const [password, setPassword] = useState(''); // State to store the password input
  
    return (
      <ImageBackground
        source={require('../assets/background.png')} // Your background image
        style={styles.backgroundImage} // Ensure the background covers the whole screen
      >
          <View style={styles.loginBackground}>
            <Text style={styles.loginHeading}>Log In</Text>
  
            {/* Username Input */}
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputText}
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder="Enter your username"
                autoCapitalize="none"
              />
            </View>
  
            {/* Password Input */}
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputText}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your password"
                secureTextEntry // This will hide the password text
                autoCapitalize="none"
              />
            </View>
  
            <View style={styles.buttonContainer}>
              <View style={styles.buttons}>
                <Button
                  title="Log In"
                  onPress={() => navigation.replace('MainApp')}
                  color="#fff"
                />
              </View>
            </View>
  
            <Text style={styles.signupText}>
              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>
                    Don't have an account yet? Sign up here!</Text>
              </TouchableOpacity>
            </Text>
          </View>
      </ImageBackground>
    );
  }

export default LoginScreen;