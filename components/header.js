import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = () => {
  return <Text style={styles.header}>My Todos</Text>;
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "coral",
    padding: 15
  }
});

export default Header;
