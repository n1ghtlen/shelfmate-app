import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, Button } from 'react-native';
import styles from './styles';

function LoginScreen({ navigation }) {

    const [username, setUsername] = useState(''); // State to store the username input

    return (
        <View style={styles.container}>
            <View style={styles.loginBackground}>
                <Text style={styles.loginHeading}>
                    Log In
                </Text>

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
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder="Enter your password"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button
                        title="Log In"
                        onPress={() => navigation.navigate('Home')}
                        color="#fff"
                        />
                    </View>
                </View>
                <Text style={{ color: '#fff'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                        <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>
                        Don't have an account yet? Sign up here!
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>    
    );
}

export default LoginScreen;