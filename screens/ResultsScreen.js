import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useState } from "react";

import { useNavigation } from '@react-navigation/native';

export const ResultsScreen = (data) => {

  const input = data.route.params;
  console.log(input);
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
    navigation.navigate('Q1Screen', true);
  }

  const aBackgroundColor = input.a ? "lightgreen" : "tomato";
  const bBackgroundColor = input.b ? "lightgreen" : "tomato";
  const cBackgroundColor = input.c ? "lightgreen" : "tomato";
  const dBackgroundColor = input.d ? "lightgreen" : "tomato";

  function percent() {
    let count = 0;
    if (input.a) count++;
    if (input.b) count++;
    if (input.c) count++;
    if (input.d) count++;

    switch (count) {
      case 0: return 0
      case 1: return 25
      case 2: return 50
      case 3: return 75
      case 4: return 100
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,}}>
      <Text style={{fontSize: 20}}>You Scored {percent()}%!</Text>
      <TouchableWithoutFeedback onPress={handleA}>
        <View backgroundColor={aBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Q1</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleB}>
        <View backgroundColor={bBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Q2</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleC}>
        <View backgroundColor={cBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Q3</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleD}>
        <View backgroundColor={dBackgroundColor} style={{width: '90%', height: 40, justifyContent: "center", margin: 10}}>
          <Text style={{fontSize: 20}}>Q4</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleNext}>
        <View backgroundColor="greenyellow" style={{width: '50%', height: 40, justifyContent: "center", alignItems: "center", margin: 40}}>
          <Text style={{fontSize: 20}}>Try Again!</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};