import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingTop: 0, 
  },
  questionnaireContainer: {
    alignItems: "center",
    flex: 1,
  },
 //WELCOME SCREEN:
 
backgroundContainer: {
  flex: 1,
  backgroundColor: 'green',
 },
 whiteHalfCircle: {
  position: 'absolute',
  top: 0,
  left: -width / 2, // Offsets the half circle to center it
  width: width * 2,
  height: width,
  borderBottomLeftRadius: width,
  borderBottomRightRadius: width,
  backgroundColor: 'white',
 },
 contentContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 // Your existing styles (unchanged)
 container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
 },
 welcome: {
  fontSize: 44,
  fontWeight: 'bold',
  color: '#ffffff',
  paddingTop: 100,
  textAlign: 'center',
 },
 subText: {
  fontSize: 18,
  color: '#ffffff',
  textAlign: 'center',
  paddingTop: 10,
  paddingHorizontal: 60,
 },
 canary: {
  paddingTop: 100,
  width: 100,        // Adjust this value to change the size
  height: 310, // Remove any fixed height
  aspectRatio: 1,    // Maintains a square image box (change this if your image is not square)
 },
 bottomTextContainer: {
  position: 'absolute',
  bottom: 40,
  width: '100%',
  alignItems: 'center',
 },
 bottomText: {
  fontSize: 18,
  color: '#fff',
  textAlign: 'center',
 },
 
   
  pantry: {
    width: "300",
    height: "600", // Makes sure the image fills the available space
    objectFit: "contain",
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
  backgroundImage: {
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
    top: 20, // Space from the top of the screen
    left: 10, // Space from the left
    zIndex: 1, // Make sure it appears above the camera
    padding: 10, // Add some padding to the button
  },
  backButton: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  returnButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute", // Absolute positioning to keep it above the camera
    top: 40, // Space from the top of the screen
    left: 10, // Space from the left
    zIndex: 1, // Make sure it appears above the camera
    // Add some padding
  },
  returnButton: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowText: {
    fontSize: 35,
    fontWeight: "bold",
    padding: 7,
    color: "#FFFFFF",
    backgroundColor: "#048C00",
    borderRadius: 38,
  },

  //Recipes Main Page

  header: {
    paddingTop: 60,
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginVertical: 14,
    paddingTop: 20,
  },

  savedRecipesWrapper: {
    height: width * 0.55 + 20,
  },

  scrollViewContent: {
    paddingLeft: 20,
    paddingRight: 10,
    height: width * 0.55,
  },

  imageContainer: {
    width: width * 0.7,
    height: width * 0.5,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },

  savedRecipeImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  discoverImage: {
    width: '100%',
    height: width * 0.3,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    borderRadius: 16,
  },

  imageTitle: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  gridItem: {
    width: width * 0.43,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },


  //camera

  cameraContainer: {
    flex: 1, // Allow the container to take up full screen
    height: "100%",
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
    color: "#fff",
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "80%",
    //alignItems: "center",
  },
  modalImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalText: {
    fontSize: 16,
    //textAlign: "center",
    marginVertical: 2,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#A86000",
    borderRadius: 5,
    width: "20%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  prpdContainer: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  prpdHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingTop: 20,
  },
  prpdBackButtonContainer: {
    padding: 10,
  },
  prpdBackButton: {
    fontSize: 18,
    color: "#000",
  },
  prpdImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 16,
  },
  prpdDetailsContainer: {
    flex: 1,
  },
  prpdItemName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  prpdItemServings: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  prpdItemDescription: {
    fontSize: 16,
    color: "#888",
    marginBottom: 48,
  },
  prpdItemDaysLeft: {
    fontSize: 16,
    color: "#888",
    marginBottom: 8,
  },
  prpdExpirationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  prpdItemExpirationDate: {
    fontSize: 16,
    color: "#888",
  },
  prpdItemQuantity: {
    fontSize: 16,
    color: "#888",
  },
  fontWeight: {
    bold: "Roboto-Bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  containerOption: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  selectedContainer: {
    backgroundColor: "#A86000",
    color: "white",
  },
  quantityInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  quantityButton: {
    backgroundColor: "#048C00",
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "bold",
  },
  quantityControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  deleteButton: {
    borderColor: "#dc3545",
    color: "#fcb1b1",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
  },
  deleteButtonText: {
    color: "#dc3545",
    fontSize: 16,
    fontWeight: "bold",
  },
  expirationInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#048C00",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  productInfoContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#048C00", //
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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

  //Recipe Details
  detailImage: {
    width: width,
    height: height / 3,
    marginBottom: 16,
  },
  
  
  recipeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  
  heartOverlay: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 24,
    padding: 8,
    zIndex: 10,
  },

  backOverlay: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 24,
    padding: 8,
    zIndex: 10,
  },
  
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'left',
  },
  
  ingredient: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
    paddingHorizontal: 30,
    textAlign: 'left',
  },
  
  instructionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'left',
  },
  
  instructionsText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 12,
    paddingHorizontal: 30,
    textAlign: 'left',
  },  
});

export default styles;
