import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';
import Test from './Test'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};
// [[[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]]]
export default function App() {
  const Stack = createStackNavigator()
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black
  })

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} options={{
          'headerBackTitleVisible': false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
