import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera"; // Assuming you're using CameraView and expo-camera package
import styles from '../styles'
import { useNavigation } from '@react-navigation/native';

function ScanScreen() {

const navigation = useNavigation();

  const cameraRef = useRef(null); // No need for type annotations in JavaScript
  const [facing, setFacing] = useState("back"); // Facing as string 'back' or 'front'
  const [permission, requestPermission] = useCameraPermissions();
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [pictureSizes, setPictureSizes] = useState([]); // Initialize empty array for picture sizes

  useEffect(() => {
    async function getSizes() {
      console.log("hi!");
      console.log(permission);
      if (permission?.granted && cameraRef.current) {
        console.log("sized!");
        const sizes = await cameraRef.current.getAvailablePictureSizesAsync();
        setPictureSizes(sizes);
        console.log(sizes);
      }
    }

    getSizes();
  }, [permission]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo);
      // You can save the photo here or handle it as you need.
      // For example, navigating to another screen with the photo or uploading it.
    }
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
          pictureSize={selectedSize}
        >
          <View style={styles.scanButtonContainer}>
            <TouchableOpacity
              onPress={toggleCameraFacing}
            >
              <Text style={styles.scanPrompt}>Align the barcode within the frame to scan.</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    </View>
  );  
}

export default ScanScreen;