import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ImageBackground } from 'react-native';


const ViewBackground = ({ children }) => {
    return (
      <ImageBackground style={{ flex: 1 }} source={
        require('../../../assets/background.png')
      }>
        <View>
          <StatusBar style="auto" />
            {children}
        </View>
      </ImageBackground>
    );
}
export default ViewBackground;