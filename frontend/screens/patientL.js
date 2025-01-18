import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomAlert from '../components/addPatient'; 
import CustomHeader from '../components/customHeaderPL';
import CustomFooter from '../components/navbarPL';
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {HorizontalLineList} from '../components/scrollableList';

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [number, setNumber] = useState(''); 
  const navigation = useNavigation();
  
  const handleAddButton = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.content}>
     
      </View>
      <TouchableOpacity style={styles.roundButton} onPress={handleAddButton}>
        <Ionicons name="add" size={32} color="white" /> 
      </TouchableOpacity>
      <CustomFooter />

     
      <CustomAlert
        visible={showAlert}
        onClose={handleCloseAlert}
        message="Add New Patient"
        number={number} 
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  roundButton: {
    position: 'absolute',
    bottom: 80, 
    right: 20,
    backgroundColor: COLORS.thatBlue,
    borderRadius: 50,
    width: 60, 
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default Home;
