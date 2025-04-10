import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const { width, height, fontScale } = useWindowDimensions();

  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      backgroundColor: 'green',
      position: 'relative',
    },
    whiteHalfCircle: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: height * 0.4,
      borderBottomLeftRadius: width / 2,
      borderBottomRightRadius: width / 2,
      backgroundColor: 'white',
      zIndex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      width: '100%',
      zIndex: 2,
    },
    canary: {
      width: width * 0.5,
      height: width * 0.6,
      resizeMode: 'contain',
      marginTop: -height * 0.3,
      marginBottom: height * 0.1,
      zIndex: 3,
    },
    welcome: {
      fontSize: (width * 0.08) / fontScale,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 12,
      textAlign: 'center',
    },
    subText: {
      fontSize: (width * 0.045) / fontScale,
      color: 'white',
      textAlign: 'center',
      marginHorizontal: 24,
      marginBottom: height * 0.05,
      maxWidth: '80%',
      lineHeight: (width * 0.06) / fontScale,
    },
    bottomTextContainer: {
      position: 'absolute',
      bottom: height * 0.06,
      zIndex: 2,
    },
    bottomText: {
      fontSize: (width * 0.045) / fontScale,
      color: '#fff',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.whiteHalfCircle} />

      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Image
          source={require('../assets/canary.png')}
          style={styles.canary}
        />

        <Text style={styles.welcome}>Welcome!</Text>

        <Text style={styles.subText}>
          Your personal pantry mate, that tells you what’s on your plate.
        </Text>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Tap to continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
