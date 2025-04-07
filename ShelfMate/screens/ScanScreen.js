import React, { useState, useEffect, useRef } from "react";
import { 
  View, Text, Button, TouchableOpacity, Alert, Image, 
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
      setScanned(true); // Lock the scanner so it doesn't trigger multiple times
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
            image_url: data.product.image_url || null,
          });
        } else {
          // Show alert if product is not found
          Alert.alert("Product not found", "Unable to find product details.", [
            {
              text: "OK",
              onPress: () => {
                resetScanner(); // Reset after user acknowledges alert
                setLoading(false); // Stop loading state after the alert
              },
            },
          ]);
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch product data.", [
          {
            text: "OK",
            onPress: () => {
              resetScanner(); // Reset after error alert
              setLoading(false); // Stop loading state after the alert
            },
          },
        ]);
      }
    }
  };
  
  const resetScanner = () => {
    setProductInfo(null); // Clear product info
    setContainer("pantry"); // Reset container to default
    setQuantity(1); // Reset quantity
    setExpirationDate(''); // Reset expiration date
    setScanned(false); // Allow scanning again after the user has acknowledged the alert
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

        Alert.alert(`Added ${quantity} of ${productInfo.product_name} to the ${container}!`);
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

      {productInfo ? (
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
            <Text style={styles.modalTitle}>Add to:</Text>
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
              placeholder="Expiration Date (mm/dd/yyyy)"
              value={expirationDate}
              onChangeText={setExpirationDate}
            />
            <TouchableOpacity onPress={handleAddToContainer} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to the {container}</Text>
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







