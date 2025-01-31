import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';

// Welcome Screen Component
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ top: 300 }}>
            This is the profile screen.
        </Text>
      </View>
    </View>
  );
}

export default ProfileScreen;