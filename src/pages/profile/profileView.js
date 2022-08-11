import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViewBackground } from '../../components/viewBackground/viewBackground';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const ProfileView = () => {
    return (
      <ViewBackground>
        <Text>Esse é o perfil</Text>
      </ViewBackground>
    );
}
export default ProfileView;
