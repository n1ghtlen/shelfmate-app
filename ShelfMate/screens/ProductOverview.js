/*import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 0,
    },
    gridRow: {
        flexDirection: "row",  //creates a row layout
        justifyContent: "space-evenly", //even spacing between items
        width: "100%"
    },
    box: {
        padding: 20,
        margin: 10,
        backgroundColor: "#c9c9c9",
        borderRadius: 10,
        width: 100, //fixed rectangle width
        height: 150, //fixed rectangle height
        justifyContent: "center", //centers content vertically
        alignItems: "center", //centers the content horizontally
    },
    text: {
        color: "#000000",
        textAlign: "center",
    }
});

function ProductOverview() {
    return (
        //back button
        //section title
        <View style={styles.container}>
            <View style={styles.gridRow}>
                <View style={styles.box}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
        
            <View style={styles.gridRow}>
                <View style={styles.box}>
                    <Text style={styles.text}>4</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>5</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>6</Text>
                </View>
            </View>
            <View style={styles.gridRow}>
                <View style={styles.box}>
                    <Text style={styles.text}>7</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>8</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>9</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductOverview;*/

import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
//import { makeStyles } from "@material-ui/core/styles"; = only for web development
//import { Grid, Paper } from "@material-ui/core";

//mock pantry product data
const mockProducts = [
    { id: 1, name: "Milk", image: require("../assets/product_images/milk.png"), expiry: "2025-01-25", description: "Fresh dairy milk", quantity: 2 },
    { id: 2, name: "Broccoli", image: require("../assets/product_images/broccoli.png"), expiry: "2025-02-15", description: "Organic broccoli", quantity: 1 },
    { id: 3, name: "Cherry", image: require("../assets/product_images/cherry.png"), expiry: "2025-02-25", description: "1lb of fresh orgaic cherries", quantity: 12 },
    { id: 4, name: "Corn", image: require("../assets/product_images/corn.png"), expiry: "2025-03-01", description: "1lb of sweet corn", quantity: 5 },
    { id: 5, name: "Cucumber", image: require("../assets/product_images/cucumber.png"), expiry: "2025-02-20", description: "Whole cucumber", quantity: 2 },
    { id: 6, name: "Green Onion", image: require("../assets/product_images/onions.png"), expiry: "2025-02-20", description: "Fresh green onions bunch", quantity: 2 },
    { id: 7, name: "Red Pepper", image: require("../assets/product_images/pepper.png"), expiry: "2025-02-20", description: "Organic red pepper", quantity: 2 },
    { id: 8, name: "Salmon", image: require("../assets/product_images/salmon.png"), expiry: "2025-02-02", description: "Fresh smoked Atlantic salmon", quantity: 2 },
    { id: 9, name: "Shrimp", image: require("../assets/product_images/shrimp.png"), expiry: "2025-02-20", description: "2lb of frozen shrimp", quantity: 2 },
];

//sort products alphabetically
const sortedProducts = [...mockProducts].sort((a, b) => a.name.localeCompare(b.name));

//filter to show expiring soon (in this example: before 2025-02-18)
const expiringSoon = mockProducts.filter((product) => product.expiry <= "2025-02-18");

//reusable product card component
const ProductCard = ({ product, onPress, showExpiry }) => (
    <TouchableOpacity style={styles.box} onPress={() => onPress(product)}>
        {/*need to specifiy the source of the image because = url*/}
        <Image source={typeof product.image === 'string' ? { uri: product.image } : product.image} style={styles.image} />
        <Text style={styles.text}>{product.name}</Text>
        {showExpiry && <Text style={styles.expiryText}>Expires: {product.expiry}</Text>}
    </TouchableOpacity>
);

function ProductOverview() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <View style={styles.container}>
            {/*section s: expiring soon */}
            <Text style={styles.sectionTitle}>Products Expiring Soon</Text>
            <ScrollView horizontal>
                <View style={styles.gridRow}>
                    {expiringSoon.map((product) => (
                        <ProductCard key={product.id} product={product} onPress={setSelectedProduct} showExpiry />
                    ))}
                </View>
            </ScrollView>

            {/*section 2: all products */}
            <Text style={styles.sectionTitle}>All Products</Text>
            <View style={styles.gridRow}>
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onPress={setSelectedProduct} showExpiry={false} />
                ))}
            </View>

            {/*modal overlay for full product details*/}
            <Modal visible={!!selectedProduct} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedProduct && (
                            <>
                                <Image source={typeof selectedProduct.image === 'string' ? { uri: selectedProduct.image } : selectedProduct.image} style={styles.modalImage} />
                                <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                                <Text style={styles.modalText}>Expiry Date: {selectedProduct.expiry}</Text>
                                <Text style={styles.modalText}>Quantity: {selectedProduct.quantity}</Text>
                                <Text style={styles.modalText}>{selectedProduct.description}</Text>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedProduct(null)}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default ProductOverview;

//styling specifically for this grid screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
    gridRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    box: {
        width: 100,
        height: 150,
        backgroundColor: "#c9c9c9",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    expiryText: {
        fontSize: 12,
        color: "red",
        marginTop: 5,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 2,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#ff6347",
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
