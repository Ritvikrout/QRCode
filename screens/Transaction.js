import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class TransactionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  button: { 
    width: "43%", 
    height: 55, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#F48D20", 
    borderRadius: 15 }, 
    buttonText: { fontSize: 24, color: "#FFFFFF" }
});
