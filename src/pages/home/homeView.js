import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import { ViewBackground } from '../../components/viewBackground/viewBackground';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default function Home() {
    return (
        <View style={styles.container}>
          <Text>Essa é a home</Text>
        </View>
    );
}
