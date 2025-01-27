import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionnaireContainer: {
    alignItems: 'center',
    flex: 1,
  },
  welcome: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#A86000",
    textAlign: "center",
    paddingBottom: 200,
  },
  logo: {
    width: 300,
    height: 300,
    objectFit: "contain",
  },
  image: {
    width: 300,
    height: 300,
  },
  pantry: {
    // using padding & margin might be better to handle layout, but not sure how
    width: 350,
    height: 400,
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
    backgroundColor: '#025400',
    padding: 16, // Add padding inside the background container
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  topText: {
    fontSize: 18, // Set a readable font size
    fontWeight: 'bold', // Bold text for emphasis
    color: '#fff', // White text for contrast
    textAlign: 'center', // Center the text
    marginTop: 40,
  },
  questionText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  optionsContainer: {

  },
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
    alignItems: 'center', // Centers the button horizontally
    justifyContent: 'center', // Centers the button vertically (if necessary)
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
  loginBackground: {
    width: "75%",
    height: "60%",
    backgroundColor: "#A86000",
    borderRadius: 15,
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
    marginBottom: -150,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  backButton: {
    fontSize: 18,
    color: "#000",
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
});

export default styles;
