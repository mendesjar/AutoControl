import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/homeView';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default function App() {
    return (
      <View>
        <Home/>
        <StatusBar style="auto" />
      </View>
    );
}
