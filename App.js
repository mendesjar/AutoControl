import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default function App() {
    return (
      <ImageBackground style={{ flex: 1}} source={
        require('./assets/background.png')
      }>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    );
}
