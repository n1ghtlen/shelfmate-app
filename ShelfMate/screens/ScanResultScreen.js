import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const ScanResultScreen = ({ route }) => {
  const { scannedItems } = route.params;
  const [expandedItem, setExpandedItem] = useState(null);

  const handleLongPress = (index) => {
    setExpandedItem(index === expandedItem ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {scannedItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onLongPress={() => handleLongPress(index)}
          style={styles.itemContainer}
        >
          <Text style={styles.itemName}>{item.name}</Text>
          {expandedItem === index && (
            <View style={styles.itemDetails}>
              <Text>Details about {item.name}</Text>
              {/* Add more details here */}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ScanResultScreen;
