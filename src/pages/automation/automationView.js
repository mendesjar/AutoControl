import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViewBackground } from '../../components/viewBackground/viewBackground';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const Automation = () => {
    return (
      <ViewBackground>
        <Text>Essa é a automatização</Text>
      </ViewBackground>
    );
}

export default Automation;
