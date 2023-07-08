import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LOGO_SIZE = 150;

const HomeScreen = () => {
  const handleLoginPress = () => {
    // Handle login button press
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <AntDesign name="user" size={24} color="#888" />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Enjoy your stay!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loginButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#888888',
  },
});

export default HomeScreen;
