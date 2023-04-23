import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';
import Test from './Test'
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';

import HomeScreen from './src/screens/Home';
import ChatScreen from './src/screens/Chat';
import AlterHome from './src/screens/alter-home'
import ChatDavinciScreen from './src/screens/CompletionDavinci';
import ImageGenerationScreen from './src/screens/ImageGeneration'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UIButton from './src/ui/button/ui-button';
import { Text, View } from 'react-native';
interface User {
  id: number | string,
  name: string
}
export type RootStackParamList = {
  Home?: {
    actionText?: string
  };
  Chat?: {
    chat_id: string | number,
    title?: string
  };
  CompletionDavinci?: {
    title?: string
  };
  ImageGeneration?: {
    title?: string
  },
  AlterHome?: {}
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
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="AlterHome" component={AlterHome}
            options={
              {
                title: 'Главная',
                headerShown: false
              }
            }
          />
          <Stack.Screen name="Home" component={HomeScreen}
            options={
              {
                title: 'Главная'
              }
            }
          />
          <Stack.Screen name="Chat" component={ChatScreen} options={{
            'headerBackTitleVisible': false,
            title: 'Чат GTP-3.5 Turbo'
          }}
          initialParams={
            {
              chat_id: 123,
            }
          }
          />
          <Stack.Screen name="CompletionDavinci" component={ChatDavinciScreen} options={{
            'headerBackTitleVisible': false,
            headerStyle: {
              backgroundColor: '#0f172a',
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: "white",
            title: 'Code Copilot text-davinci-003'
          }}
          />
          <Stack.Screen name="ImageGeneration" component={ImageGenerationScreen} options={{
            'headerBackTitleVisible': false,
            title: 'DALL-E',
            headerRight: () => ( <View className='mx-4 bg-amber-600 p-2 rounded-md'><Text className="text-white text-xs font-inter-500">PDF</Text></View> )  
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
