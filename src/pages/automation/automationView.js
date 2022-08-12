import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';

export function AutomationView() {
    return (
      <ImageBackground style={{ flex: 1}} source={
        require('../../../assets/background.png')
      }>
        <View>
        </View>
      </ImageBackground>
    );
}

