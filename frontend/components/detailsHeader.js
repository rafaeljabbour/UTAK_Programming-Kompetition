import React from 'react';
import { View, Image,Text, TouchableOpacity,StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native'; 

const CustomHeader = () => {
    const navigation = useNavigation();
    const handleBack=()=>{
        navigation.navigate('patientL');
    }
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.navButton} onPress={handleBack }>
       <Image source={require('../assets/images/backCircle.png')} style={styles.icon} />
       </TouchableOpacity>
      <View style={styles.rightContent}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
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
