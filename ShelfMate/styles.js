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
    width: "200",
    height: "400", // Makes sure the image fills the available space
    objectFit: "contain",
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
    flexDirection: "row",
    alignItems: "center",
    position: "absolute", // Absolute positioning to keep it above the camera
    top: 40, // Space from the top of the screen
    left: 10, // Space from the left
    zIndex: 1, // Make sure it appears above the camera
    padding: 10, // Add some padding to the button
  },
  returnButton: {
    fontSize: 18,
    color: "#fff",
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
    color: "#fff",
  },
  productInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  resetButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28a745",
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  containerOptions: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-evenly", // Distribute options evenly
    width: "100%",
  },
  containerOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    margin: 5,
  },
  selectedContainer: {
    backgroundColor: "#28a745", // Highlight selected container with green
  },
  quantityInput: {
    width: "60%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#28a745", // Green button for submitting
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#dc3545", // Red button for canceling
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  arrowContainer: {
    margin: 40,
    position: "absolute",
    top: "65%", // Vertically center the arrows
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between", // Spread the arrows across the width of the screen
    alignItems: "center", // Vertically center the arrows
  },
  arrowButton: {
    backgroundColor: "#048C00", // Semi-transparent background for better visibility
    borderRadius: 30, // Make the button round
    width: 50, // Increase the width of the button
    height: 50, // Increase the height of the button
    justifyContent: "center", // Center the text inside the button
    alignItems: "center", // Center the text inside the button
  },

  leftArrow: {
    position: "absolute",
    left: 0, // Position at the left edge
    zIndex: 10, // Ensure the button stays on top
  },
  rightArrow: {
    position: "absolute",
    right: 0, // Position at the right edge
    zIndex: 10, // Ensure the button stays on top
  },
  arrowText: {
    fontSize: 30, // Increase the size of the arrow text
    color: "#fff", // White color for contrast
  },
  containerLabel: {
    top: 40,
    fontSize: 24, // Size of the label text
    fontWeight: "bold", // Makes the text bold
    textAlign: "center", // Centers the text
    color: "#333", // Dark color for the text, can be adjusted
    textTransform: "capitalize", // Capitalizes the first letter of each word
  },
  scanResultContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  scanResultHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingTop: 20, // Add padding to avoid the dynamic island
  },
  scanResultBackButtonContainer: {
    padding: 10,
  },
  scanResultBackButton: {
    fontSize: 18,
    color: "#000",
  },
  scanResultSearchBox: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  scanResultScrollViewContent: {
    flexDirection: "column",
  },
  scanResultItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  scanResultItemContent: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 16,
  },
  scanResultItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scanResultItemDetails: {
    marginTop: 8,
    overflow: "hidden", // Ensure content is hidden when collapsed
  },
  plusButtonContainer: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#28a745",
    borderRadius: 5,
  },
  plusButton: {
    fontSize: 18,
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -(width * 0.4) }, { translateY: -100 }],
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28a745",
    borderRadius: 5,
    marginVertical: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalCloseButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#dc3545",
    borderRadius: 5,
  },
  modalCloseButtonText: {
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
});

export default styles;
