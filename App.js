import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/header.js";
import TodoItem from "./components/todoItem.js";
import AddTodo from "./components/addTodo.js";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy Water", key: "1" },
    { text: "Buy Fried Rice", key: "2" },
    { text: "Buy Jollof Rice", key: "3" },
    { text: "Buy Chocolate Digestive", key: "4" },
    { text: "Do Push Ups", key: "5" }
  ]);

  const handlePress = key => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodo(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long", [
        { text: "Okay" }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={handlePress} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 50
  },
  listContainer: {
    flex: 1,
    padding: 20
  }
});
