import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import styles from '../styles';

function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState(''); //state to store the search query
    const pantryImages = [
        require('../assets/pantry-shelf.png'),
        require('../assets/pantry-fridge.png'),
        require('../assets/pantry-freezer.png')
    ];
    
    const [pantryView, setPantryView] = useState(0); //track index of current view

    const handleArrowPress = (direction) => {
        let newIndex = pantryView;

        if (direction === 'left') {
            newIndex = (pantryView + 1) % pantryImages.length; //travel forward
        } else if (direction === 'right') {
            newIndex = (pantryView - 1 + pantryImages.length) % pantryImages.length; //travel back
        }

        setPantryView(newIndex);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* search box */}
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.inputText}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholder="Search item..."
                        autoCapitalize="none"
                    />
                </View>
                
                {/* pantry image */}
                <Image
                    source={pantryImages[pantryView]}
                    style={styles.pantry}
                    //onPress={() => navigation.replace('...')} -> need to navigate to pantry screen
                />

                {/* arrow buttons */}
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