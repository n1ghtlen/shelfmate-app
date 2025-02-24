import React, { useState, useEffect, useRef } from "react";
import { 
  View, Text, Button, TouchableOpacity, Alert, ActivityIndicator, Image, 
  TextInput, Modal 
} from "react-native";
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
  const [expirationDate, setExpirationDate] = useState('');

  // Request permission when component mounts
  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const handleBarCodeScanned = async (barcode) => {
    if (!scanned) {
      setScanned(true);
      setLoading(true);
  
      const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode.data}.json`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        console.log("API Response:", data);
  
        if (data.status === 1 && data.product) {
          setProductInfo({
            product_name: data.product.product_name || "Unknown Product",
            barcode: data.product.code,
            image_url: data.product.image_url || null, // Store image URL
          });
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
    setScanned(false);
    setProductInfo(null);
    setContainer("pantry");
    setQuantity(1);
    setExpirationDate('');
  };

  const handleAddToContainer = async () => {
    try {
      if (!productInfo) {
        Alert.alert("Error", "No product data available.");
        return;
      }
  
      const payload = {
        container, // Now using "container" field instead of "containerName"
        productName: productInfo.product_name,
        barcode: productInfo.barcode,
        quantity: parseInt(quantity, 10) || 1, // Ensure quantity is a number
        expirationDate,
        image: productInfo.image_url,
      };
  
      console.log("Payload being sent:", payload);
  
      const response = await fetch('https://shelfmate-app.onrender.com/add-item', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      const data = await response.json();
  
      if (response.status === 201) { // Change 200 to 201 (successful creation)
        Alert.alert("Success", `Added ${quantity} of ${productInfo.product_name} to the ${container}`);
        setModalVisible(false);
        resetScanner();
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to add item to the container.");
    }
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
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButtonContainer}>
        <Text style={styles.returnButton}>Return</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <CameraView
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
          barcodeScannerSettings={{ barcodeTypes: ["upc_a", "ean13", "qr"] }}
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
          <Text style={styles.productName}>{productInfo.product_name}</Text>
          {/* Reset Button */}
          <TouchableOpacity onPress={resetScanner} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Scan Another Product</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Add item</Text>
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
              {["pantry", "fridge", "freezer"].map((containerOption) => (
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
              onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ""))}
            />
            <TextInput
              style={styles.expirationInput}
              placeholder="Expiration Date (optional)"
              value={expirationDate}
              onChangeText={setExpirationDate}
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








