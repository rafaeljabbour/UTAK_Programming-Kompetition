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
   

      {/* Embedded website from the backend to be displayed on the front end */}
      <WebView source={{ uri: 'https://www.google.com/search?q=colour+picked' }} style={styles.webView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
    marginTop: 0, 
  },
});
