import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';

// Welcome Screen Component
function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={{ top: 300 }}>
            This is the profile screen.
        </Text>
    </View>
  );
}

export default ProfileScreen;