import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, TouchableOpacity, Alert, ActivityIndicator, Image, TextInput, Modal } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

function ScanScreen() {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [container, setContainer] = useState("pantry");
  const [quantity, setQuantity] = useState(1);

  // Request permission when component mounts
  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const handleBarCodeScanned = async (barcode) => {
    if (!scanned) {
      setScanned(true); // Disable scanning until the result is processed
      setLoading(true);

      const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode.data}.json`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("API Response:", data); // Log the API response to debug

        if (data.status === 1 && data.product) {
          setProductInfo(data.product); // Store the product info in state
          setModalVisible(true); // Show modal to select container and quantity
        } else {
          Alert.alert("Product not found", "Unable to find product details.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    }
  };

  const resetScanner = () => {
    setScanned(false); // Reset the scanner so it can scan again
    setProductInfo(null); // Clear the previous product info
    setContainer("pantry"); // Reset container to pantry by default
    setQuantity(1); // Reset quantity to 1
  };

  const handleAddToContainer = () => {
    // Add the product to the selected container with the specified quantity
    console.log(`Added ${quantity} of ${productInfo.product_name} to the ${container}`);
    setModalVisible(false); // Close the modal
    resetScanner(); // Reset scanner to scan another product
  };

  if (!permission) return <View />;
  
  if (!permission.granted && !permission.canAskAgain) {
    return (
      <View style={{ marginTop: 300, alignItems: "center" }}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Camera access has been denied. Please enable it in settings.
        </Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ marginTop: 300, alignItems: "center" }}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={() => requestPermission()} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.returnButtonContainer}
      >
        <Text style={styles.returnButton}>Return</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <CameraView
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
          barcodeScannerSettings={{
            barcodeTypes: ["upc_a", "ean13", "qr"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <View style={styles.scanButtonContainer}>
            <TouchableOpacity onPress={() => setFacing(facing === "back" ? "front" : "back")}>
              <Text style={styles.scanPrompt}>Align the barcode within the frame to scan.</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>

      {/* Loading Indicator or Product Info */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : productInfo ? (
        <View style={styles.productInfoContainer}>
          {productInfo.image_url && (
            <Image 
              source={{ uri: productInfo.image_url }} 
              style={{ width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 }} 
            />
          )}
          <Text style={styles.productName}>{productInfo.product_name || "Product Name Not Available"}</Text>
          <Text>{productInfo.ingredients_text || "Ingredients not available"}</Text>
          {productInfo.nutriments && (
            <Text>Calories: {productInfo.nutriments.energy_kcal || "N/A"} kcal</Text>
          )}
          {/* Reset Button to scan another item */}
          <TouchableOpacity onPress={resetScanner} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Scan Another Product</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>No product information available</Text>
      )}

      {/* Modal for selecting container and quantity */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add to Container</Text>
            <Text style={styles.modalLabel}>Select Container:</Text>
            <View style={styles.containerOptions}>
              {["Pantry", "Fridge", "Freezer"].map((containerOption) => (
                <TouchableOpacity
                  key={containerOption}
                  onPress={() => setContainer(containerOption)}
                  style={[
                    styles.containerOption,
                    container === containerOption && styles.selectedContainer,
                  ]}
                >
                  <Text>{containerOption}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              style={styles.quantityInput}
              placeholder="Enter quantity"
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={(text) => {
                // Check if the input is a valid number
                const parsedQuantity = parseInt(text, 10);

                // Only update if the input is a valid number or empty
                if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
                  setQuantity(parsedQuantity);
                } else if (text === "") {
                  setQuantity(""); // Allow clearing the input
                }
              }}
            />
            <TouchableOpacity onPress={handleAddToContainer} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to {container}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ScanScreen;






