import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import styles from '../styles';

function SignupScreen({ navigation }) {
    const [username, setUsername] = useState(''); // State to store the username input

    return (
        <ImageBackground
        source={require('../assets/background.png')} // Your background image
        style={styles.background} // Ensure the background covers the whole screen
      >
            <View style={styles.loginBackground}>
                <Text style={styles.loginHeading}>
                    Sign Up
                </Text>

                {/* Username Input */}
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder="Create a username"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        value={username}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Create a password"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        value={username}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Confirm password"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button
                        title="Sign Up"
                        onPress={() => navigation.navigate('Welcome')}
                        color="#fff"
                        />
                    </View>
                </View>
                    <Text style={{ color: '#fff'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                            <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>
                            Already have an account? Log in!
                            </Text>
                        </TouchableOpacity>
                    </Text>
            </View>
        </ImageBackground>    
    );
}

export default SignupScreen;