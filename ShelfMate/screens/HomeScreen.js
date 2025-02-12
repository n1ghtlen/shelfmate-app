import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import styles from '../styles';

// Import the images
import pantryShelf from '../assets/pantry-shelf.png';
import pantryFridge from '../assets/pantry-fridge.png';
import pantryFreezer from '../assets/pantry-freezer.png';

function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
    const [imageSource, setImageSource] = useState(pantryShelf); // State to store the image source
    const [containerLabel, setContainerLabel] = useState('Pantry Shelf'); // Initial label


    const handleArrowPress = (direction) => {
        if (direction === 'left') {
            if (imageSource === pantryFridge) {
                setImageSource(pantryShelf); // Go back to pantry-shelf image
                setContainerLabel('Pantry Shelf'); // Update the label
            } else if (imageSource === pantryFreezer) {
                setImageSource(pantryFridge); // Change to pantry-fridge image
                setContainerLabel('Refrigerator'); // Update the label
            } else {
                setImageSource(pantryFreezer); // If on pantry-shelf, go to pantry-freezer
                setContainerLabel('Freezer'); // Update the label
            }
        } else if (direction === 'right') {
            if (imageSource === pantryShelf) {
                setImageSource(pantryFridge); // Change to pantry-fridge image
                setContainerLabel('Refrigerator'); // Update the label
            } else if (imageSource === pantryFridge) {
                setImageSource(pantryFreezer); // Change to pantry-freezer image
                setContainerLabel('Freezer'); // Update the label
            } else {
                setImageSource(pantryShelf); // If on pantry-freezer, go back to pantry-shelf
                setContainerLabel('Pantry Shelf'); // Update the label
            }
        }
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
                <Image
                    source={imageSource}
                    style={styles.pantry}
                />

                <Text style={styles.containerLabel}>{containerLabel}</Text>

                {/* Arrow Buttons */}
                <View style={styles.arrowContainer}>

                {/* Left Arrow */}
                <TouchableOpacity
                    onPress={() => handleArrowPress('left')}
                    style={[styles.arrowButton, styles.leftArrow]} // Apply styles for the left arrow
                >
                    <Text style={styles.arrowText}>←</Text>
                </TouchableOpacity>

                {/* Right Arrow */}
                <TouchableOpacity
                    onPress={() => handleArrowPress('right')}
                    style={[styles.arrowButton, styles.rightArrow]} // Apply styles for the right arrow
                >
                    <Text style={styles.arrowText}>→</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
    );
}

export default HomeScreen;
