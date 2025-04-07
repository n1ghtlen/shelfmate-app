import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';

// Welcome Screen Component
function WelcomeScreen({ navigation }) {
  return (

    <View style={styles.backgroundContainer}>
    {/* White half-circle at the top */}
    <View style={styles.whiteHalfCircle} />

    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MainApp')} //changed this to enter MainApp navigation instead of QuestionnaireScreen for now
    >


      <Image
        source={require('../assets/canary.png')}
        style={styles.canary}
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.subText}>
        Your personal pantry mate, that tell’s you what’s on your plate.
      </Text>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
}

export default WelcomeScreen;