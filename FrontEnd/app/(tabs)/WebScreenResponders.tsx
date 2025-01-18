import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WebScreenResponders() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button (Top Left) */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Embedded website from the backend to be displayed on the front end */}
      <WebView source={{ uri: 'https://utekresponder-production.up.railway.app/' }} style={styles.webView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10, 
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  webView: {
    flex: 1,
    marginTop: 0, 
  },
});
