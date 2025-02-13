import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Animated,
  Modal,
} from "react-native";
import { BlurView } from "expo-blur";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const ScanResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const { scannedItems } = route.params || {
    scannedItems: [
      { name: "Apple", details: "A sweet red fruit" },
      { name: "Banana", details: "A long yellow fruit" },
      { name: "Carrot", details: "An orange root vegetable" },
    ],
  };

  const [expandedItem, setExpandedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const animation = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleLongPress = (index) => {
    if (index === expandedItem) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpandedItem(null));
    } else {
      setExpandedItem(index);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handlePlusPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSaveToContainer = (container) => {
    // Handle saving the item to the specified container
    console.log(`Saving ${selectedItem.name} to ${container}`);
    setModalVisible(false);
  };

  const filteredItems = scannedItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust the output range as needed
  });

  return (
    <SafeAreaView style={styles.scanResultContainer}>
      <View style={styles.scanResultHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.scanResultBackButtonContainer}
        >
          <Text style={styles.scanResultBackButton}>Back</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.scanResultSearchBox}
          placeholder="Search items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scanResultScrollViewContent}>
        {filteredItems.map((item, index) => (
          <View key={index} style={styles.scanResultItemContainer}>
            <TouchableOpacity
              onLongPress={() => handleLongPress(index)}
              style={styles.scanResultItemContent}
            >
              <Text style={styles.scanResultItemName}>{item.name}</Text>
              {expandedItem === index && (
                <Animated.View
                  style={[
                    styles.scanResultItemDetails,
                    { height: animatedHeight },
                  ]}
                >
                  <Text>{item.details}</Text>
                  {/* Add more details here */}
                </Animated.View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePlusPress(item)}
              style={styles.plusButtonContainer}
            >
              <Text style={styles.plusButton}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {modalVisible && (
        <BlurView intensity={50} style={styles.absolute}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Save to:</Text>
            <TouchableOpacity
              onPress={() => handleSaveToContainer("Pantry")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Pantry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSaveToContainer("Fridge")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Fridge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSaveToContainer("Freezer")}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Freezer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      )}
    </SafeAreaView>
  );
};

export default ScanResultScreen;
