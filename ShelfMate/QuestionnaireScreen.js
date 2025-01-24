import {React, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Checkbox } from 'expo-checkbox';

// Dietary Restrictions Question Component
function DietaryRestrictionsQuestion({ styles, navigation }) {
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
    <View>
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

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('Home')}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
}

// Questionnaire Screen (Main component)
function QuestionnaireScreen({ route, navigation }) {
  const { styles } = route.params; // Access styles from navigation params

  return (
    <View style={styles.container}>
      <View style={styles.topTextBackground}>
        <Text style={styles.topText}>
          Welcome to ShelfMate! Please answer the following questions to tailor your experience.
        </Text>
      </View>
      <DietaryRestrictionsQuestion styles={styles} navigation={navigation} /> {/* Passing styles to the component */}
    </View>
  );
}

export default QuestionnaireScreen;