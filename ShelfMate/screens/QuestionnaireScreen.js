import {React, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import styles from '../styles';

// Dietary Restrictions Question Component
function DietaryRestrictionsQuestion({ navigation, styles }) {
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
    <View style= {{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.questionScrollViewContent}>
        <Text style={styles.questionText}>
          Do you have any of the following dietary restrictions or allergies?
        </Text>

        <View style={styles.optionsContainer}>
          {[
            'Vegan',
            'Vegetarian',
            'Keto',
            'Gluten-free',
            'Lactose-free',
            'Kosher',
            'Wheat allergy',
            'Nut allergy',
            'Shellfish allergy',
            'Egg allergy',
            'Soy allergy',
          ].map((option, index) => (
            <View key={index} style={styles.option}>
              <Checkbox
                value={selectedOptions[`option${index + 1}`]}
                onValueChange={() => handleCheckboxToggle(`option${index + 1}`)}
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('MainApp')}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
}

// Main Questionnaire Screen
function QuestionnaireScreen({ navigation }) {
  return (
    <View style={styles.questionnaireContainer}>
      <View style={styles.topTextBackground}>
        <Text style={styles.topText}>
          Welcome to ShelfMate! Please answer the following questions to tailor your experience.
        </Text>
      </View>
      <DietaryRestrictionsQuestion styles={styles} navigation={navigation} />
    </View>
  );
}

export default QuestionnaireScreen;