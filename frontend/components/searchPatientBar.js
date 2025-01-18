import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you have installed @expo/vector-icons

const SearchBar = ({ searchTerm, onSearch }) => {
  const [text, setText] = useState(searchTerm);

  const handleChangeText = (newText) => {
    setText(newText);
    // Optionally, you can perform the search here if needed
    onSearch(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Patient"
        placeholderTextColor="#4a454f"
        value={text}
        onChangeText={handleChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
       <Feather name="search" size={24} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#dbe1fe',
    borderRadius: 200,
    padding: 5,
    margin: 10,
    marginTop:30
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    marginLeft:15,
    color: 'black',
  },
});

export default SearchBar;
