import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// Common constants for reuse
const colors = {
  primary: "#025400",
  accent: "#A86000",
  lightGray: "#ccc",
  darkText: "#333",
  mediumGray: "#555",
  buttonBackground: "#048C00",
};

const styles = StyleSheet.create({
  // General text style
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
    color: colors.accent,
    textAlign: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  canary: {},
  pantry: {
    width: 300, // Changed from string to number
    height: 600,
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
    backgroundColor: colors.primary,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
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
    padding: 16,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttons: {
    width: 120,
    height: 60,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: colors.primary,
  },
  scanButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scanButtons: {
    color: "white",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBackground: {
    width: "75%",
    height: "60%",
    backgroundColor: "#333",
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
  // This scrollViewContent is for general scrolling layouts
  defaultScrollViewContent: {
    padding: 16,
    flexGrow: 1,
  },
  // Renamed duplicate scroll view content for grid layouts
  gridScrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  searchBox: {
    height: 40,
    borderColor: colors.lightGray,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    width: "90%",
    paddingLeft: 10,
    marginTop: 60,
    marginVertical: -20,
  },
  inputBox: {
    height: 40,
    borderColor: colors.lightGray,
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
    paddingTop: 100,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: -10,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  backButton: {
    fontSize: 22,
    color: "#000",
  },
  returnButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  returnButton: {
    fontSize: 18,
    color: "#fff",
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: -40,
  },
  arrowText: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    backgroundColor: colors.buttonBackground,
    borderRadius: 50,
    textAlign: 'center',
    elevation: 4, 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
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
    paddingHorizontal: 10,
  },
  imageContainer: {
    position: "relative",
    marginRight: 16,
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
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scanPrompt: {
    top: 600,
    color: '#fff',
  },
 // For ProductOverview (SectionList)
// For ProductOverview
screenWrapper: {
  flex: 1,
  backgroundColor: "#f2f2f2",
},
overviewContainer: {
  padding: 16,
  paddingBottom: 32,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: "600",
  color: "#333",
  marginVertical: 12,
  paddingHorizontal: 8,
},
expiringSoonList: {
  paddingLeft: 8,
  paddingRight: 8,
},
allProductsList: {
  paddingHorizontal: 8,
  paddingVertical: 8,
},
productCard: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 12,
  margin: 8,
  alignItems: "center",
  width: "47%", // Two items per row
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
},
productImage: {
  width: 100,
  height: 100,
  borderRadius: 12,
},
productNameText: {
  marginTop: 8,
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
  textAlign: "center",
},
productExpiry: {
  marginTop: 4,
  fontSize: 14,
  color: "#fff",
  backgroundColor: "#d9534f",
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 12,
  overflow: "hidden",
  textTransform: "uppercase",
},
modalContainer: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.6)",
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
},
modalContent: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 20,
  width: "90%",
  maxHeight: "80%",
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
  elevation: 5,
},
modalImage: {
  width: "100%",
  height: 200,
  borderRadius: 12,
  marginBottom: 16,
},
modalTitle: {
  fontSize: 22,
  fontWeight: "600",
  color: "#333",
  marginBottom: 8,
},
modalText: {
  fontSize: 16,
  color: "#555",
  marginBottom: 4,
},
closeButton: {
  backgroundColor: "#025400",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 30,
  alignSelf: "center",
  marginTop: 16,
},
closeButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
  textAlign: "center",
},

// For PantryInfoScreen

pantryHeader: {
  fontSize: 24,
  fontWeight: "bold",
  marginVertical: 16,
  color: "#333",
},
pantryList: {
  padding: 10,
},
pantryItem: {
  flex: 1,
  margin: 5,
  alignItems: "center",
},
pantryItemCard: {
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
},
pantryItemText: {
  marginTop: 8,
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
},
detailContainer: {
  flex: 1,
  padding: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
},
detailBackButton: {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  marginBottom: 20,
},
detailBackText: {
  fontSize: 18,
  marginLeft: 5,
  color: "#025400",
},
detailCard: {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 10,
  alignItems: "center",
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},
detailTitle: {
  fontSize: 24,
  fontWeight: "bold",
  marginVertical: 10,
  color: "#333",
},
detailDescription: {
  fontSize: 16,
  textAlign: "center",
  color: "#555",
},
  
});

export default styles;
