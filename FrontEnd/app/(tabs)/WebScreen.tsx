import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WebScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
   

      {/* This is where we put the url to the backend website, essentially acts as a hyperlink */}
      <WebView source={{ uri: 'https://airy-victory-production.up.railway.app/' }} style={styles.webView} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: { // Incorporated a back button to go back to app home screen (removed, here for optional use)
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  webView: {
    flex: 1,
    marginTop: 0, 
  },
});
