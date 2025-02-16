import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const PRPD = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params || {
    item: {
      name: "Cinnamon Roll",
      servings: "2 servings",
      description: "A delicious cinnamon roll with icing.",
      daysLeft: 5,
      expirationDate: "2025-02-21",
      quantity: 3,
      image: require("../assets/cinnamon-roll.jpg"), // Example image
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.prpdContainer}>
      <View style={styles.prpdHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.prpdBackButtonContainer}
        >
          <Text style={styles.prpdBackButton}>Back</Text>
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.prpdImage} />
      <View style={styles.prpdDetailsContainer}>
        <Text style={styles.prpdItemName}>{item.name}</Text>
        <Text style={styles.prpdItemServings}>{item.servings}</Text>
        <Text style={styles.prpdItemDescription}>{item.description}</Text>
        <Text style={styles.prpdItemDaysLeft}>
          {item.daysLeft} days left until expiration
        </Text>
        <View style={styles.prpdExpirationContainer}>
          <Text style={styles.prpdItemExpirationDate}>
            Expiration Date: {item.expirationDate}
          </Text>
          <Text style={styles.prpdItemQuantity}>Quantity: {item.quantity}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PRPD;
