import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {WelcomeScreen} from "./screens/WelcomeScreen.js"
import { Q1Screen } from './screens/Q1Screen.js';
import { Q2Screen } from './screens/Q2Screen.js';
import { Q3Screen } from './screens/Q3Screen.js';
import { Q4Screen } from './screens/Q4Screen.js';
import { ResultsScreen } from './screens/ResultsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/> */}
          <Stack.Screen name="WelcomScreen" component={WelcomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Q1Screen" component={Q1Screen} options={{headerShown: false}}/>
          <Stack.Screen name="Q2Screen" component={Q2Screen} options={{headerShown: false}}/>
          <Stack.Screen name="Q3Screen" component={Q3Screen} options={{headerShown: false}}/>
          <Stack.Screen name="Q4Screen" component={Q4Screen} options={{headerShown: false}}/>
          <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
