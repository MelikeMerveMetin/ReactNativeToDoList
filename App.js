import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const addList = () => {
    setList([...list, text]);
    setText("");
  };

  const deleteList = (index) => {
    const newList = [...list];
    newList.splice(index, 1); //indexten itibaren bir eleman sil
    setList(newList);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dcdcdc" }}>
      <View style={styles.container}>
        <Text style={styles.title}>YAPILACAKLAR LİSTEM</Text>
        <TextInput
          style={styles.input}
          placeholder="Yapılacak Görevinizi Giriniz"
          autoCapitalize="words"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={addList}>
          <Text style={styles.buttonText}>LİSTEYE EKLE</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            data={list}
            renderItem={({ item, index }) => (
              <View style={styles.listContainer}>
                <Text style={styles.listText}>{item}</Text>
                <TouchableOpacity
                  style={styles.listDelete}
                  onPress={() => {
                    deleteList(index);
                  }}
                >
                  <Text style={styles.listDeleteText}>Görevi Sil</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
