import React, { useState } from 'react';
import { Text, Dimensions, TextInput, TouchableOpacity, SafeAreaView, Alert, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeaderLogo';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate('home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingBottom: 40 }}>
        <Text style={styles.headerTitleBlue}>Digi-</Text>
        <Text style={styles.headerTitleRed}>ER</Text>
      </View>
      <Text style={styles.welc}>Welcome!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your email"
          placeholderTextColor="#8391a1"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={hidePassword}
          style={styles.inputText}
          placeholder="Enter your password"
          placeholderTextColor="#8391a1"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={24} color='#6a707c' />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerNowContainer}>
        <Text style={styles.regBlack}>Don't have an account? </Text>
        <Text style={styles.regBlue}>Register Now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleBlue: {
    color: '#1455da',
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitleRed: {
    color: '#c51111',
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f7f8f9',
    borderRadius: 5,
    borderColor: '#e8ecf4',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputText: {
    flex: 1,
    height: 50,
    color: 'black',
    fontSize: SIZES.medium,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginRight: width * 0.1,
  },
  forgotPasswordText: {
    color: '#6a707c',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#1d78e2',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: SIZES.large,
  },
  welc: {
    fontSize: SIZES.largeish,
    paddingBottom: 30,
  },
  registerNowContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  regBlue: {
    color: '#1d78e2',
    fontSize: SIZES.medium,
  },
  regBlack: {
    fontSize: SIZES.medium,
  },
});
