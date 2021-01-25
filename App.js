import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header.js";
import TodoItem from "./components/todoItem.js";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy Water", key: "1" },
    { text: "Buy Fried Rice", key: "2" },
    { text: "Buy Jollof Rice", key: "3" },
    { text: "Buy Chocolate Digestive", key: "4" },
    { text: "Do Push Ups", key: "5" }
  ]);

  const handleClick = () => {};

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        <FlatList
          data={todo}
          renderItem={({ item }) => <TodoItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listContainer: {
    padding: 20
  }
});
