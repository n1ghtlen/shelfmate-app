import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);
  const [largerText, setLargerText] = useState(false);
  const [voiceOver, setVoiceOver] = useState(false);

  // Function for deleting account
  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0, // Resets the navigation stack
                routes: [{ name: 'Welcome' }], // Goes to WelcomeScreen
              })
            );
          },
        },
      ]
    );
  };

  // Function to edit food restrictions
  const handleEditFoodRestrictions = () => {
    Alert.alert('Edit Food Restrictions', 'You can update your dietary restrictions here.');
  };

  // Function for handling changes to username, password, and email
  const handleChangeUsername = () => {
    Alert.prompt(
      'Change Username',
      'Enter your new username:',
      text => console.log('New Username:', text)
    );
  };

  const handleChangePassword = () => {
    Alert.prompt(
      'Change Password',
      'Enter your new password:',
      text => console.log('New Password:', text),
      'secure-text'
    );
  };

  const handleChangeEmail = () => {
    Alert.prompt(
      'Change Email',
      'Enter your new email:',
      text => console.log('New Email:', text)
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => {
            // Use navigation.reset with the correct path
            navigation.reset({
              index: 0, // Resets the navigation stack to the first route
              routes: [{ name: 'Log In' }], // Navigate to LoginScreen
            });
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#f8f8f8', paddingTop: 40 }}>
      {/* Back Button */}
      <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backOverlay}
    >
      <Text style={styles.backButton}>{"←"}</Text>
    </TouchableOpacity>

      {/* Profile Screen Content */}
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: 60 }}>
          {/* Account Section */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Account</Text>
          <View style={{ backgroundColor: '#ffffff', padding: 15, borderRadius: 8, marginBottom: 15 }}>
            <TouchableOpacity onPress={handleChangeUsername} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesome name="user-o" size={18} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 14 }}>Username</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangePassword} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesome name="lock" size={18} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 14 }}>Password</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="bell-o" size={18} style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 14 }}>Notifications</Text>
              </View>
              <Switch trackColor={{ false: '#767577', true: '#4CAF50' }} thumbColor={notifications ? '#ffffff' : '#f4f3f4'} value={notifications} onValueChange={setNotifications} />
            </View>
            <TouchableOpacity onPress={handleChangeEmail} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesome name="envelope-o" size={18} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 14 }}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="sign-out" size={18} style={{ marginRight: 10, color: '#A86000' }} />
              <Text style={{ fontSize: 14, color: '#A86000' }}>Log Out</Text>
            </TouchableOpacity>
          </View>

          {/* Accessibility Section */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Accessibility</Text>
          <View style={{ backgroundColor: '#ffffff', padding: 15, borderRadius: 8, marginBottom: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ fontSize: 14 }}>Increase Contrast</Text>
              <Switch trackColor={{ false: '#767577', true: '#A86000' }} thumbColor={contrast ? '#ffffff' : '#f4f3f4'} value={contrast} onValueChange={setContrast} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ fontSize: 14 }}>Reduce Motion</Text>
              <Switch trackColor={{ false: '#767577', true: '#A86000' }} thumbColor={motion ? '#ffffff' : '#f4f3f4'} value={motion} onValueChange={setMotion} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ fontSize: 14 }}>Larger Text</Text>
              <Switch trackColor={{ false: '#767577', true: '#A86000' }} thumbColor={largerText ? '#ffffff' : '#f4f3f4'} value={largerText} onValueChange={setLargerText} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 14 }}>Voice Over</Text>
              <Switch trackColor={{ false: '#767577', true: '#A86000' }} thumbColor={voiceOver ? '#ffffff' : '#f4f3f4'} value={voiceOver} onValueChange={setVoiceOver} />
            </View>
          </View>

          {/* Dietary Preferences Section */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Dietary Preferences</Text>
          <View style={{ backgroundColor: '#ffffff', padding: 15, borderRadius: 8, marginBottom: 15 }}>
            <TouchableOpacity onPress={handleEditFoodRestrictions} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <FontAwesome name="cutlery" size={18} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 14 }}>Edit Food Restrictions</Text>
            </TouchableOpacity>
          </View>

          {/* Delete Account Section */}
          <TouchableOpacity onPress={handleDeleteAccount} style={{ marginTop: 15 }}>
            <Text style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
