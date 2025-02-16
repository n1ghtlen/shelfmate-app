import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import styles from "./style"; 

const pantryItems = [
  { id: "1", name: "Apple", icon: "ios-nutrition", description: "A fresh red apple, great for snacks!" },
  { id: "2", name: "Bread", icon: "ios-bread", description: "Whole grain bread, good for sandwiches." },
  { id: "3", name: "Milk", icon: "ios-cart", description: "A carton of fresh milk." },
  { id: "4", name: "Carrots", icon: "ios-leaf", description: "Fresh organic carrots." },
];

const PantryInfoScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      {selectedItem ? (
        // Item Detail View
        <View style={styles.productInfoContainer}>
          <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.backButtonContainer}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.backButton}> Back</Text>
          </TouchableOpacity>

          <Ionicons name={selectedItem.icon} size={80} color="#A86000" />
          <Text style={styles.productName}>{selectedItem.name}</Text>
          <Text style={styles.bottomText}>{selectedItem.description}</Text>
        </View>
      ) : (
        // List of Pantry Items
        <FlatList
          data={pantryItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollViewContent}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedItem(item)}>
              <View style={styles.imageContainer}>
                <Ionicons name={item.icon} size={50} color="#025400" />
                <Text style={styles.imageTitle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default PantryInfoScreen;
