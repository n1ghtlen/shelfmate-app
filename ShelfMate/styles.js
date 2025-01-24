import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Regular',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#A86000',
    textAlign: 'center',
    paddingBottom: 200,
  },
  logo: {
    width: 300,
    height: 300,
    objectFit: 'contain',
  },
  image: { // space between image and text
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  pantry: { // using padding & margin might be better to handle layout, but not sure how
    width: 350,
    height: 400,
    //marginBottom: 48,
    //marginTop: 48,
    //marginLeft: 32,
    //marginRight: 32,
    objectFit: 'contain',
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#555',
    textAlign: 'center',
  },
  topTextBackground: {
    width: '100%',
    height: '25%',
    backgroundColor: '#025400',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 30,
    marginTop: 30,
  },
  questionText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    height: '35%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingTop: 230,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 80,
  },
  buttons: {
    flex: 1,
    width: 120,
    height: 60,
    borderRadius: 20,
    padding: 10,
    margin: 20,
    backgroundColor: '#025400'
  },
  loginBackground: {
    width: '75%',
    height: '60%',
    backgroundColor: "#A86000",
    borderRadius: 15,
    alignItems: 'center',
  },
  loginHeading: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    paddingTop: 20,
    marginBottom: 50,
  },
  inputBox: {
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
    paddingLeft: 10,
  },
  inputText: {
    paddingTop: 10,
  }
});

export default styles;