import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { COLORS, SIZES } from '../constants';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>
        <Text style={styles.headerTitleBlue}>Digi-</Text>
        <Text style={styles.headerTitleRed}>ER</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 3.84,
    shadowOffset: { width: 0, height:10 },
    elevation: 5,
    padding: 22,
    marginBottom: 0, // Remove bottom margin
  },
  headerTitle: {
    fontSize: SIZES.largeish,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitleBlue: {
    color: '#1455da',
  },
  headerTitleRed: {
    color: '#c51111',
  },
});

export default CustomHeader;
