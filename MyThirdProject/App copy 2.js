import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';


export default function CatApp() {

 let pic = {
  uri: 'https://raw.githubusercontent.com/stevensonNi/CIS340/main/ProjectDog.jpg'};

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello, here is a dog!</Text>
      </View>
  );
}
