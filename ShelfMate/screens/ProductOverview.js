import React from "react";
//import { makeStyles } from "@material-ui/core/styles"; = only for web development
//import { Grid, Paper } from "@material-ui/core";
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
            {/*section title*/}
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

export default ProductOverview;