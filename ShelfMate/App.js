import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

function WelcomeScreen({ navigation }) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('Questionnaire')}
    >
      <Text style={styles.welcome}>Welcome!</Text>
      <Image
        source={require('./canary.png')}
        style={styles.image}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  );
}

function DietaryRestrictionsQuestion() {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false,
    option10: false,
    option11: false,
  });

  const handleCheckboxToggle = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    {/* Scrollview currently overlaps questionnaire banner, need to debug */},
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Q1 Dietary Restrictions Question */}
      <Text style={styles.questionText}>
        Do you have any of the below dietary restrictions or allergies?
      </Text>

      {/* Q1 Answer Options */}
      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option1}
            onValueChange={() => handleCheckboxToggle('option1')}
          />
          <Text style={styles.optionText}>Vegan</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option2}
            onValueChange={() => handleCheckboxToggle('option2')}
          />
          <Text style={styles.optionText}>Vegetarian</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option3}
            onValueChange={() => handleCheckboxToggle('option3')}
          />
          <Text style={styles.optionText}>Keto</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option4}
            onValueChange={() => handleCheckboxToggle('option4')}
          />
          <Text style={styles.optionText}>Gluten-free</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option5}
            onValueChange={() => handleCheckboxToggle('option5')}
          />
          <Text style={styles.optionText}>Lactose-free</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option6}
            onValueChange={() => handleCheckboxToggle('option6')}
          />
          <Text style={styles.optionText}>Kosher</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option7}
            onValueChange={() => handleCheckboxToggle('option7')}
          />
          <Text style={styles.optionText}>Wheat allergy</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option8}
            onValueChange={() => handleCheckboxToggle('option8')}
          />
          <Text style={styles.optionText}>Nut allergy</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option9}
            onValueChange={() => handleCheckboxToggle('option9')}
          />
          <Text style={styles.optionText}>Shellfish allergy</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option10}
            onValueChange={() => handleCheckboxToggle('option10')}
          />
          <Text style={styles.optionText}>Egg allergy</Text>
        </View>

        <View style={styles.option}>
          <Checkbox
            value={selectedOptions.option11}
            onValueChange={() => handleCheckboxToggle('option11')}
          />
          <Text style={styles.optionText}>Soy allergy</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Questionnaire Screen (Tap welcome screen to get here)
function QuestionnaireScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topTextBackground}>
        <Text style={styles.topText}>
          Welcome to ShelfMate! Please answer the following questions to tailor your experience.
        </Text>
      </View>
      <DietaryRestrictionsQuestion/>
    </View>
  );
}

// Tab Navigator for Home Screen
const Tab = createBottomTabNavigator();

// Stack Navigator to handle the flow from WelcomeScreen to HomeScreen
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  image: {
    marginBottom: 20, // space between image and text
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
    paddingTop: 250,
  },
});

export default App;
