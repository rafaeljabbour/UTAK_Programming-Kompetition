import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function index() {
  const router = useRouter();
 //SOS message to emergency services. (our contact for temporary testing)
  const sendSOSMessage = () => {
    const phoneNumber = '+16473919505'; 
    const message = 'Help! It is an emergency!'; 
    const smsURL = `sms:${phoneNumber}&body=${encodeURIComponent(message)}`;

    Linking.openURL(smsURL).catch(err => console.error('Error sending SMS:', err));
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          <Text style={styles.headerTitleBlue}>Fire</Text>
          <Text style={styles.headerTitleRed}>Route</Text>
        </Text>
      </View> 

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.citizenButton]}
          onPress={() => router.push('/WebScreen')} //pushes to embedded webpage for citizen interface
        >
                <Text style={styles.buttonText}>Citizen</Text>
          <Ionicons name="person-circle-outline" size={50} color="white" />
    
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.responderButton]}
          onPress={() => router.push('/ScreenA')}
        >
                   <Text style={styles.buttonText}>Responder</Text> 
                   
          <Ionicons name="flame-outline" size={50} color="white" />
          {/*EMS Responder Buttonn(Red, Fire Logo)*/}
        </TouchableOpacity>
      </View>

   
      <TouchableOpacity
        style={styles.SOSButton} //SOS button
        onPress={sendSOSMessage} 
      >
                <Text style={styles.buttonText}>SOS</Text>
        <Ionicons name="warning-outline" size={40} color="white" />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'space-between', 
    paddingBottom: 30,
  },
  headerContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 1,
    paddingVertical: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitleBlue: {
    color: 'red',
  },
  headerTitleRed: {
    color: '#0088ff',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 180,
    borderRadius: 15,
    marginVertical: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    gap: 15,
  },
  citizenButton: {
    backgroundColor: '#0088ff',
  },
  responderButton: {
    backgroundColor: 'red',
  },
  SOSButton: {
    backgroundColor: 'black',
    width: '90%',
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    gap: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

