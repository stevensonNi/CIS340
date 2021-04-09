import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props){
  return (
    <View>
      <Text>Hey, my name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name="Nicole Stevenson"/>
      <Student name="Alice ####"/>
      <Student name="Bob ####"/>
      <Student name="Jon Clark"/>
    </View>
  );
}
