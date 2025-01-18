import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Dimensions, View, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/searchPatientBar';
import CustomHeader from '../components/detailsHeader';
import CustomFooter from '../components/detailsFooter';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Home() {
  
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <CustomHeader />
      <View style={styles.content}>
       
        <View style={styles.bigBtmsContainer}>
         
        </View>
      </View>
     
      <CustomFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bigBtmsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginTop: 10,
  },
  bigBtm: {
    backgroundColor: '#f6f7ff',
    borderWidth: 1,
    borderColor: '#dbe1fe',
    borderRadius: 10,
    width: width / 2 - 20, 
    padding: 15,
    margin: 5,
  },
  numby: {
    color: '#1d78e2',
    fontSize: SIZES.largeish,
    fontWeight: 'bold',
  },
  classification: {
    fontSize: SIZES.medium,
    marginTop: 5,
  },
  longBtn: {
    backgroundColor: COLORS.thatBlue,
    borderRadius: 300,
    padding: 20,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  longText: {
    color: 'white',
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  
});
