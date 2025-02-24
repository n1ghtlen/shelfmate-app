import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  questionnaireContainer: {
    alignItems: "center",
    flex: 1,
  },
  welcome: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#A86000",
    textAlign: "center",
  },
  logo: {
    width: 300,
    height: 300,
    objectFit: "contain",
  },
  canary: {},
  pantry: {
    width: '300',
    height: '600', // Makes sure the image fills the available space
    objectFit: 'contain',
  },
  bottomTextContainer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#555",
    textAlign: "center",
  },
  topTextBackground: {
    backgroundColor: "#025400",
    padding: 16, // Add padding inside the background container
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // Add shadow for Android
    shadowColor: "#000", // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  topText: {
    fontSize: 18, // Set a readable font size
    fontWeight: "bold", // Bold text for emphasis
    color: "#fff", // White text for contrast
    textAlign: "center", // Center the text
    marginTop: 40,
  },
  questionText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  optionsContainer: {},
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  questionScrollViewContent: {
    flex: 1,
    padding: 16, // Add padding inside the scrollable area
  },
  buttonContainer: {
    alignItems: "center", // Centers the button horizontally
    justifyContent: "center", // Centers the button vertically (if necessary)
    padding: 20,
  },
  buttons: {
    width: 120,
    height: 60,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: "#025400",
  },
  scanButtonContainer: {
    alignItems: "center", // Centers the button horizontally
    justifyContent: "center", // Centers the button vertically (if necessary)
    padding: 20,
  },
  scanButtons: {
    color: "white",
  },
  background: {
    flex: 1, // This makes sure the ImageBackground covers the entire screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  loginBackground: {
    width: "75%",
    height: "60%",
    backgroundColor: "#A86000",
    borderRadius: 20,
    alignItems: "center",
  },
  loginHeading: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    paddingTop: 20,
    marginBottom: 50,
  },
  searchBox: {
    height: 40,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    paddingLeft: 10,
    marginTop: 50,
  },
  inputBox: {
    height: 40,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    marginTop: 20,
    paddingLeft: 10,
  },
  inputText: {
    paddingTop: 10,
  },
  header: {
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute", // Absolute positioning to keep it above the camera
    top: 40, // Space from the top of the screen
    left: 10, // Space from the left
    zIndex: 1, // Make sure it appears above the camera
    padding: 10, // Add some padding to the button
  },
  backButton: {
    fontSize: 18,
    color: "#000",
  },
  returnButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',  // Absolute positioning to keep it above the camera
    top: 40,  // Space from the top of the screen
    left: 10,  // Space from the left
    zIndex: 1,  // Make sure it appears above the camera
    // Add some padding
  },
  returnButton: {
    fontSize: 18,
    color: "#fff",
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 7,
    color: '#FFFFFF',
    backgroundColor: "#048C00",
    borderRadius: 38,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "left",
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    marginRight: 16,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 10,
  },
  imageTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "30%",
    marginBottom: 16,
  },
  gridImage: {
    width: "100%",
    height: width * 0.25,
    borderRadius: 10,
  },
  cameraContainer: {
    flex: 1, // Allow the container to take up full screen
    justifyContent: "flex-start", // Start from top for camera view
    backgroundColor: "black",
  },
  camera: {
    flex: 1, // Make the camera view take up full screen
    width: "100%", // Ensures the camera takes up the full width
    height: "100%", // Ensures the camera takes up the full height
  },
  scanPrompt: {
    top: 600,
    color: '#fff',
  },
  //styling specifically for productoverview page
  productContainer: {
    flex: 1,
    padding: 10,
},
gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
},
box: {
    width: 100,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
},
image: {
    width: 80,
    height: 80,
    borderRadius: 5,
},
productText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
},
expiryText: {
    fontSize: 12,
    color: "white",
    marginTop: 5,
    padding: 2,
    backgroundColor: "#048C00",
},
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
},
modalContainer: {
  width: '80%',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
},
containerOptions: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 15,
},
containerOption: {
  padding: 10,
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
},
selectedContainer: {
  backgroundColor: '#A86000',
  color: 'white',
},
quantityInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 15,
  paddingLeft: 10,
},
expirationInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 15,
  paddingLeft: 10,
},
addButton: {
  backgroundColor: '#048C00',
  padding: 10,
  borderRadius: 5,
  marginBottom: 15,
},
addButtonText: {
  color: 'white',
  fontSize: 16,
},
closeButton: {
  backgroundColor: '#dc3545',
  padding: 10,
  borderRadius: 5,
},
closeButtonText: {
  color: 'white',
  fontSize: 16,
},
productInfoContainer: {
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
  width: '90%',
  alignSelf: 'center',
  marginTop: 20,
},
resetButton: {
  marginTop: 20,
  backgroundColor: '#048C00', // 
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
},

resetButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
itemModalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
},
itemModalContent: {
  width: "85%",
  padding: 20,
  backgroundColor: "#fff",
  borderRadius: 15,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5, // Adds shadow effect on Android
  alignItems: "center",
},
itemModalTitle: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#333",
  marginVertical: 10,
  textAlign: "center",
},
itemModalText: {
  fontSize: 16,
  color: "#555",
  textAlign: "center",
  marginBottom: 8,
},
});

export default styles;
