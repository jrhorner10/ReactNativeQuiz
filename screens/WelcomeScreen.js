import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useState } from "react";

import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {

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

      <TouchableWithoutFeedback onPress={handleNext}>
        <View backgroundColor="greenyellow" style={{width: '50%', height: 40, justifyContent: "center", alignItems: "center", margin: 40}}>
          <Text style={{fontSize: 20}}>Start Quiz!</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};