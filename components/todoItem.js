import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler(item.key);
      }}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#bbb",
    borderStyle: "dashed"
  }
});

export default TodoItem;
