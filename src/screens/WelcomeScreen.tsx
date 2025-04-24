// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/styles';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <ImageBackground
      source={require('../assets/todooooo.jpg')} // make sure you have this image
      style={styles.background}
      resizeMode="cover"
    >
      
        <Text style={styles.title}>Welcome to ToDo</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Home')} // navigate to your main page
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 32,
    color: COLORS.mainText,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: COLORS.mainText,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
