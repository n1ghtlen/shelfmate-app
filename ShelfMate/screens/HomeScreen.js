import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

    const pantryImages = [
        require('../assets/pantry-shelf.png'),    // Image for Pantry
        require('../assets/pantry-fridge.png'),   // Image for Fridge
        require('../assets/pantry-freezer.png')   // Image for Freezer
    ];
    
    const [pantryView, setPantryView] = useState(0); // Track index of current view

    const handleArrowPress = (direction) => {
        let newIndex = pantryView;

        if (direction === 'left') {
            newIndex = (pantryView + 1) % pantryImages.length; // Travel forward
        } else if (direction === 'right') {
            newIndex = (pantryView - 1 + pantryImages.length) % pantryImages.length; // Travel back
        }

        setPantryView(newIndex);
    };

    // Function to navigate to ProductOverview with selected container
    const navigateToProductOverview = (container) => {
        navigation.navigate("ProductOverview", { selectedContainer: container });
    };

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
                <TouchableOpacity
                    onPress={() => {
                        // Navigate to ProductOverview with the corresponding container (pantry, fridge, freezer)
                        const containerType = pantryView === 0 ? "pantry" : pantryView === 1 ? "fridge" : "freezer";
                        navigateToProductOverview(containerType);
                    }}
                >
                    <Image
                        source={pantryImages[pantryView]}
                        style={styles.pantry}
                    />
                </TouchableOpacity>

                {/* Arrow Buttons */}
                <View style={styles.arrowContainer}>
                    <TouchableOpacity onPress={() => handleArrowPress('right')}>
                        <Text style={styles.arrowText}> ← </Text>
                    </TouchableOpacity>
                    <Text>              </Text>
                    <TouchableOpacity onPress={() => handleArrowPress('left')}>
                        <Text style={styles.arrowText}> → </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;
