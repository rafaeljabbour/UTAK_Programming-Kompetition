
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import DropdownMenu from './dropDown';
import SearchBar from './searchBar';

const CustomHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContent}>
        <DropdownMenu />
      </View>
      <View style={styles.rightContent}>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.03,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center', // Center items vertically
  },
  leftContent: {
    flex: 1, // Take up as much space as available
  },
  rightContent: {
    flex: 1, // Take up as much space as available
    alignItems: 'flex-end', // Align items to the end (right side)
  },
});

export default CustomHeader;
