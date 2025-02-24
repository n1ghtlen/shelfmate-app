import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from "react-native";
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
                const response = await fetch("https://shelfmate-app.onrender.com/items");
                const data = await response.json();

                console.log("Raw Data:", data);

                const formattedData = data.map((product) => {
                    const expirationDate = product.expiration_date;
                    const formattedExpirationDate = expirationDate && !isNaN(new Date(expirationDate).getTime())
                        ? new Date(expirationDate).toISOString().split("T")[0]
                        : "No date available";

                    return {
                        id: product._id?.$oid || product._id || Math.random().toString(),
                        name: product.product_name || "Unnamed Product",
                        image: getImageSource(product),
                        expiry: formattedExpirationDate,
                        description: product.description || "No description available",
                        quantity: product.quantity || 1,
                        container: product.container || "pantry", // Ensure the container is included
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
    const filteredProducts = products.filter((product) => product.container === selectedContainer);

    // Sort products alphabetically, handling null names
    const sortedProducts = [...filteredProducts].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
    );

    // Filter products expiring soon (before or on today)
    const today = new Date();
    const expiringSoon = sortedProducts.filter((product) => {
        if (product.expiry === "No date available") return false;
        const expiryDate = new Date(product.expiry);
        return expiryDate <= today;
    });

    return (
        <>
            {/* Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
                    <Text style={styles.backButton}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.productContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        {/* Expiring Soon Section */}
                        {expiringSoon.length > 0 && (
                            <>
                                <Text style={styles.sectionTitle}>Products Expiring Soon</Text>
                                <ScrollView horizontal>
                                    <View style={styles.gridRow}>
                                        {expiringSoon.map((product) => (
                                            <ProductCard key={product.id} product={product} onPress={() => setSelectedProduct(product)} showExpiry />
                                        ))}
                                    </View>
                                </ScrollView>
                            </>
                        )}

                        {/* All Products Section */}
                        <Text style={styles.sectionTitle}>All Products</Text>
                        <View style={styles.gridRow}>
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} onPress={() => setSelectedProduct(product)} showExpiry={false} />
                            ))}
                        </View>
                    </>
                )}

                {/* Modal for Full Product Details */}
                <Modal visible={Boolean(selectedProduct)} transparent animationType="slide">
                    <View style={styles.itemModalContainer}>
                        <View style={styles.itemModalContent}>
                            {selectedProduct && (
                                <>
                                    <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedProduct(null)}>
                                        <Text style={styles.closeButtonText}>Close</Text>
                                    </TouchableOpacity>
                                    <Image source={selectedProduct.image} style={styles.modalImage} />
                                    <Text style={styles.itemModalTitle}>{selectedProduct.name}</Text>
                                    <Text style={styles.itemModalText}>Expiry Date: {selectedProduct.expiry}</Text>
                                    <Text style={styles.itemModalText}>Quantity: {selectedProduct.quantity}</Text>
                                    <Text style={styles.itemModalText}>{selectedProduct.description}</Text>
                                </>
                            )}
                        </View>
                    </View>
                </Modal>
            </View>
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


