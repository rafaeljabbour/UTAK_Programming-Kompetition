import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../constants';

const CustomFooter = () => {
  const router = useRouter();
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/home')}>
        <Text style={styles.navButtonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/patientL')}>
        <Text style={styles.navButtonText}>Next</Text>
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
    borderWidth:1,
    width:'40%',
    borderColor:COLORS.thatBlue,
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:10,
    borderRadius:20
  },
  navButtonText: {
    fontSize: SIZES.medium,
    color: '#1d78e2'
  },
  icon:{
    margin:8,
    marginTop:15,
    width:20,
    height:20
  }
});

export default CustomFooter;
