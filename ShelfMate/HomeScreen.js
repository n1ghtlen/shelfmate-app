import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import styles from './styles';

function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState(''); //state to store the search query

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.inputText}
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    placeholder="Search item..."
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.container}>
                <Image
                    source={require('./pantry-shelf.png')}
                    style={styles.pantry}
                />
            </View>
        </View>
    )
}

export default HomeScreen