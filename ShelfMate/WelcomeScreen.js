import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

// Welcome Screen Component
function WelcomeScreen({ route, navigation }) {
  // accesses the styles passed from App.js
  const { styles } = route.params;

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