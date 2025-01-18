import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Dimensions, View, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/searchPatientBar';
import CustomHeader from '../components/CustomHeaderLogo';
import CustomFooter from '../components/navbar';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import CustomAlert from '../components/addPatient'; 

const { width } = Dimensions.get('window');

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);
  const [number, setNumber] = useState(''); 
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddButton = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleHDU = () => {
    navigation.navigate('patientL'); 
  };

  const handleICU = () => {
    navigation.navigate('patientL');
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <CustomHeader />
      <View style={styles.content}>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <View style={styles.bigBtmsContainer}>
          <TouchableOpacity style={styles.bigBtm} onPress={handleICU}>
            <Text style={styles.numby}>24</Text>
            <Text style={styles.classification}>ICU Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBtm} onPress={handleHDU}>
            <Text style={styles.numby}>12</Text>
            <Text style={styles.classification}>HDU Patients</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.longBtn} onPress={handleAddButton}>
            <Text style={styles.longText}>Add New Patient</Text>
            <Ionicons name="add" size={32} color="white" /> 
          </TouchableOpacity>
      <CustomFooter />
      <CustomAlert
        visible={showAlert}
        onClose={handleCloseAlert}
        message="Add New Patient"
        number={number} 
      />
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
