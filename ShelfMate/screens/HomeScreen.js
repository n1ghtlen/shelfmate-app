import { React, useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import styles from '../styles';

function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

    const [imageSource, setImageSource] = useState(require('../assets/pantry-shelf.png')); // State to store the image source

    const handleArrowPress = (direction) => {
        if (direction === 'left') {
            setImageSource(require('../assets/pantry-fridge.png'));
        } else if (direction === 'right') {
            setImageSource(require('../assets/pantry-freezer.png'));
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

                {/* Arrow Buttons */}
                <View style={styles.arrowContainer}>
                    <TouchableOpacity onPress={() => handleArrowPress('left')}>
                        <Text style={styles.arrowText}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleArrowPress('right')}>
                        <Text style={styles.arrowText}>→</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default HomeScreen