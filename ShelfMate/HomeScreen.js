import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
            This is the home screen
            </Text>
        </View>
    )
}

export default HomeScreen