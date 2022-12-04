//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: 'column',
  },
});

const App = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
      source={require('./assets/pixel_weather.png')}
      resizeMode="cover"
      style={styles.image}>

      </ImageBackground>
    </View>
  );
};

export default App;