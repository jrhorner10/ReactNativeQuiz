import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useState } from "react";

import { useNavigation } from '@react-navigation/native';

export const Q2Screen = (data) => {

  const input = data.route.params;

  const navigation = useNavigation();

  const [isAPressed, setIsAPressed] = useState(false);
  const [isBPressed, setIsBPressed] = useState(false);
  const [isCPressed, setIsCPressed] = useState(false);
  const [isDPressed, setIsDPressed] = useState(false);

  const handleA = () => {
    setIsAPressed(!isAPressed);
  }

  const handleB = () => {
    setIsBPressed(!isBPressed);
  }

  const handleC = () => {
    setIsCPressed(!isCPressed);
  }

  const handleD = () => {
    setIsDPressed(!isDPressed);
  }

  const handleNext = () => {
    let answer;
    if (isAPressed == false && isBPressed == false && isCPressed == true && isDPressed == false) {
      answer = true
    } else {
      answer = false
    }
    input.b = answer;
    navigation.navigate('Q3Screen', {a: input.a, b: answer});
  }

  const aBackgroundColor = isAPressed ? "cyan" : "#DDDDDD";
  const bBackgroundColor = isBPressed ? "cyan" : "#DDDDDD";
  const cBackgroundColor = isCPressed ? "cyan" : "#DDDDDD"; 
  const dBackgroundColor = isDPressed ? "cyan" : "#DDDDDD";

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,}}>
      <Text style={{fontSize: 20}}>Q1</Text>
      <Text style={{fontSize: 20}}>Which country has the tallest mountain</Text>
      <TouchableWithoutFeedback onPress={handleA}>
        <View backgroundColor={aBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>China</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleB}>
        <View backgroundColor={bBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>India</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleC}>
        <View backgroundColor={cBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Nepal</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleD}>
        <View backgroundColor={dBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Bhutan</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleNext}>
        <View backgroundColor="greenyellow" style={{width: '50%', height: 40, justifyContent: "center", alignItems: "center", margin: 40}}>
          <Text style={{fontSize: 20}}>Next Question</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};