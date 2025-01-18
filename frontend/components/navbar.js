import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../constants';

const CustomFooter = () => {
  const router = useRouter();
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/home')}>
      <Image source={require('../assets/images/homeActive.png')} style={styles.icon} />
        <Text style={styles.navButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/patientL')}>
      <Image source={require('../assets/images/patientList.png')} style={styles.icon} />
        <Text style={styles.navButtonText2}>Patient List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 }, // Adjusted to show shadow only on the top
    shadowOpacity: 0.04,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
     // Adjust padding for iOS
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: SIZES.medium,
    color: '#1d78e2'
  },
  navButtonText2: {
    fontSize: SIZES.medium,
    color: 'black'
  },
  icon:{
    margin:8,
    marginTop:15,
    width:20,
    height:20
  }
});

export default CustomFooter;
