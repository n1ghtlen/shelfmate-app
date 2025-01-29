import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import styles from '../styles';

function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Search Box */}
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.inputText}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholder="Search item..."
                        autoCapitalize="none"
                    />
                </View>
                
                {/* Pantry Image */}
                    <Image
                        source={require('../assets/pantry-shelf.png')}
                        style={styles.pantry}
                    />
            </View>
        </View>
    );
}


export default HomeScreen