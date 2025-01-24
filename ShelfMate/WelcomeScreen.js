import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';

// Welcome Screen Component
function WelcomeScreen({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Questionnaire')}
    >
      <Image
        source={require('./logo.png')}
        style={styles.image}
      />
    
      <Image
        source={require('./canary.png')}
        style={styles.image}
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  );
}

export default WelcomeScreen;