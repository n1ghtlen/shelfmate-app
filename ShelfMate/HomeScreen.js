import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';

function HomeScreen({ route, navigation }) {
    const { styles } = route.params; // Access styles passed from navigation

    return (
        <View style={styles.container}>
            <Text styles = {'textAlign: center'}>
            This is the home screen
            </Text>
        </View>
    )
}

export default HomeScreen