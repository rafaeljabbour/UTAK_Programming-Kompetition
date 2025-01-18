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
        <Feather name="search" size={18} color='#6c6d73' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search "
        placeholderTextColor="#8f9099"
        value={text}
        onChangeText={handleChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
     
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
    backgroundColor:'#f6f7ff',
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 35,
    fontSize: 16,
    marginLeft:5,
    color: 'black',
  },
});

export default SearchBar;
