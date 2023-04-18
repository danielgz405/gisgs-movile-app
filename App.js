import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Welcome from './src/pages/Index';
import { NativeRouter, Redirect, Route, Switch } from 'react-router-native';
import { themes } from './src/assets/themes/themes';
import Main from './src/pages/Index';

export default function App() {
  return (
    <View style={{backgroundColor: themes.colors.slate[900], width: '100%', height: '100%'}}>
      <StatusBar style='light' />
      <NativeRouter>
       <Main />
      </NativeRouter>
    </View>  
  );
}