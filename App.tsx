import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';
import Test from './Test'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';

interface User {
  id: number | string,
  name: string
}
export type RootStackParamList = {
  Home?: {
    actionText?: string
  };
  About?: User;
};
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
          'headerBackTitleVisible': false,
          title: 'Что такое?'
        }}
        initialParams={
          {
            id: 123,
            name: 'John'
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
