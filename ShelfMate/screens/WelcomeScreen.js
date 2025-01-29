import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';

// Welcome Screen Component
function WelcomeScreen({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Questionnaire')}
    >
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    
      <Image
        source={require('../assets/canary.png')}
        style={styles.canary}
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  );
}

export default WelcomeScreen;