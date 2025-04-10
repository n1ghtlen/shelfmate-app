import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

function ProductOverview({ route }) {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the selected container from the route params
  const { selectedContainer } = route.params;

  const getImageSource = (product) => {
    return product.image && product.image !== "null"
      ? { uri: product.image }
      : require("../assets/canary.png");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://shelfmate-app.onrender.com/items"
        );
        const data = await response.json();
  
        console.log("Raw Data:", data);
  
        const formattedData = data.map((product) => {
          let rawDate = product.expiration_date?.$date || product.expiration_date;
        
          // Check if the date is in a 2-digit year format (e.g., 5/25/25)
          if (rawDate && rawDate.match(/\d{1,2}\/\d{1,2}\/\d{2}$/)) {
            const [month, day, year] = rawDate.split('/');
            // Convert 2-digit year to 4-digit year (assuming 20xx)
            rawDate = `${month}/${day}/20${year}`;
          }
        
          // Manually parse the date to ensure it's in the correct format
          const [month, day, year] = rawDate.split('/');
          const parsedDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
        
          // Check if the parsed date is valid
          const formattedExpirationDate =
            !isNaN(parsedDate.getTime())
              ? parsedDate.toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              : "No date available";
        
          return {
            id: product._id?.$oid || product._id || Math.random().toString(),
            name: product.product_name || "Unnamed Product",
            image: getImageSource(product),
            expiry: formattedExpirationDate,
            quantity: product.quantity || 1,
            container: product.container || "pantry",
            allergens: product.allergens || "No allergens listed",
          };
        });
        
        setProducts(formattedData);
        
        
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  // Filter products based on the selected container
  const filteredProducts = products.filter(
    (product) => product.container === selectedContainer
  );

  // Sort products alphabetically, handling null names
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "")
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Zero out time for accurate comparisons
  
  const soonCutoffDate = new Date(today); // Clone today
  soonCutoffDate.setDate(soonCutoffDate.getDate() + 7); // Products expiring within the next 7 days
  
  // Filter expired products (strictly before today)
  const expiredProducts = sortedProducts.filter((product) => {
    if (product.expiry === "No date available") return false;
  
    const [month, day, year] = product.expiry.split("/").map(Number);
    const expiryDate = new Date(year, month - 1, day);
    expiryDate.setHours(0, 0, 0, 0);

    return expiryDate < today;
  });
  
  // Filter expiring soon (from today through the next 7 days, not including expired)
  const expiringSoon = sortedProducts.filter((product) => {
    if (product.expiry === "No date available") return false;
  
    const [month, day, year] = product.expiry.split("/").map(Number);
    const expiryDate = new Date(year, month - 1, day);
    expiryDate.setHours(0, 0, 0, 0);
  
    return expiryDate >= today && expiryDate <= soonCutoffDate;
  });
  

  

  return (
    <>
      {/* Back Button */}
      <View style={styles.header}>
      <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backOverlay}
    >
      <Text style={styles.backButton}>{"←"}</Text>
    </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.productContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {/* Expired Products Section */}
            {expiredProducts.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Expired Products</Text>
                <ScrollView horizontal>
                  <View style={styles.gridRow}>
                    {expiredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onPress={() => setSelectedProduct(product)}
                        showExpiry
                      />
                    ))}
                  </View>
                </ScrollView>
              </>
            )}

            {/* Expiring Soon Section */}
            {expiringSoon.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Expiring Soon</Text>
                <ScrollView horizontal>
                  <View style={styles.gridRow}>
                    {expiringSoon.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onPress={() => setSelectedProduct(product)}
                        showExpiry
                      />
                    ))}
                  </View>
                </ScrollView>
              </>
            )}

            {/* All Products Section */}
            <Text style={styles.sectionTitle}>All Products</Text>
            <ScrollView>
              <View style={styles.gridRow}>
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onPress={() => setSelectedProduct(product)}
                    showExpiry={false}
                  />
                ))}
              </View>
            </ScrollView>
          </>
        )}

        {/* Modal for Full Product Details */}
        <Modal
          visible={Boolean(selectedProduct)}
          transparent
          animationType="slide"
        >
          <View style={styles.itemModalContainer}>
            <View style={styles.itemModalContent}>
              {selectedProduct && (
                <>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelectedProduct(null)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                  <Image
                    source={selectedProduct.image}
                    style={styles.modalImage}
                  />
                  <Text style={styles.itemModalTitle}>
                    {selectedProduct.name}
                  </Text>
                  <Text style={styles.itemModalText}>
                    Expires: {selectedProduct.expiry}
                  </Text>
                  <Text style={styles.itemModalText}>
                    Allergens present: {selectedProduct.allergens}
                  </Text>
                  <Text style={styles.itemModalText}>
                    Quantity: {selectedProduct.quantity}
                  </Text>

                  {/* Quantity Controls */}
                  <View
                    style={[
                      styles.quantityControls,
                      {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                    ]}
                  >
                    {/* Decrease Button */}
                    <TouchableOpacity
                      style={[styles.quantityButton, { marginRight: 10 }]}
                      onPress={async () => {
                        const newQuantity = selectedProduct.quantity - 1;

                        if (newQuantity >= 1) {
                          // Update UI
                          setSelectedProduct((prev) => ({
                            ...prev,
                            quantity: newQuantity,
                          }));
                          setProducts((prevProducts) =>
                            prevProducts.map((product) =>
                              product.id === selectedProduct.id
                                ? { ...product, quantity: newQuantity }
                                : product
                            )
                          );

                          // Update quantity in DB
                          try {
                            await fetch(`https://shelfmate-app.onrender.com/update-quantity/${selectedProduct.id}`, {
                              method: "PATCH",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ quantity: newQuantity }),
                            });
                          } catch (error) {
                            console.error("Error updating quantity:", error);
                          }
                        } else {
                          // Remove from UI
                          setSelectedProduct(null);
                          setProducts((prevProducts) =>
                            prevProducts.filter((product) => product.id !== selectedProduct.id)
                          );

                          // Delete from DB
                          try {
                            await fetch(`https://shelfmate-app.onrender.com/delete-item/${selectedProduct.id}`, {
                              method: "DELETE",
                            });
                          } catch (error) {
                            console.error("Error deleting item:", error);
                          }
                        }
                      }}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>

                    {/* Quantity Display */}
                    <Text>{selectedProduct.quantity}</Text>

                    {/* Increase Button */}
                    <TouchableOpacity
                      style={[styles.quantityButton, { marginLeft: 10 }]}
                      onPress={async () => {
                        const newQuantity = selectedProduct.quantity + 1;

                        // Update UI
                        setSelectedProduct((prev) => ({
                          ...prev,
                          quantity: newQuantity,
                        }));
                        setProducts((prevProducts) =>
                          prevProducts.map((product) =>
                            product.id === selectedProduct.id
                              ? { ...product, quantity: newQuantity }
                              : product
                          )
                        );

                        // Update quantity in DB
                        try {
                          await fetch(`https://shelfmate-app.onrender.com/update-quantity/${selectedProduct.id}`, {
                            method: "PATCH",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ quantity: newQuantity }),
                          });
                        } catch (error) {
                          console.error("Error updating quantity:", error);
                        }
                      }}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>


                  {/* Delete Button */}
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={async () => {
                      if (!selectedProduct) return;

                      console.log('Selected product:', selectedProduct);
                      console.log('Attempting to delete product with ID:', selectedProduct.id);

                      try {
                        const response = await fetch(`https://shelfmate-app.onrender.com/delete-item/${selectedProduct.id}`, {
                          method: 'DELETE',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        });
                      
                        const rawText = await response.text();  // Get the raw response text
                      
                        if (response.ok) {
                          let responseData;
                          try {
                            // Try parsing the raw text as JSON
                            responseData = JSON.parse(rawText);
                            console.log('Deleted item:', responseData);
                            // Proceed with frontend updates
                            setProducts((prevProducts) =>
                              prevProducts.filter((product) => product.id !== selectedProduct.id)
                            );
                            setSelectedProduct(null);
                          } catch (parseErr) {
                            console.error('Error parsing response as JSON:', parseErr);
                            console.error('Raw response text:', rawText);  // Log raw text for debugging
                          }
                        } else {
                          console.error('Error deleting item:', rawText);
                        }
                      } catch (error) {
                        console.error('Request failed:', error);
                      }
                    }}
                  >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>


                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
      </ScrollView>
    </>
  );
}

// Reusable Product Card Component
const ProductCard = ({ product, onPress, showExpiry }) => (
  <TouchableOpacity style={styles.box} onPress={onPress}>
    <Image source={product.image} style={styles.image} />
    <Text style={styles.productText}>{product.name}</Text>
    {showExpiry && <Text style={styles.expiryText}>{product.expiry}</Text>}
  </TouchableOpacity>
);

export default ProductOverview;
