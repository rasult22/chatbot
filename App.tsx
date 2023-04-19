import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react';
import Test from './Test'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import ChatScreen from './src/screens/Chat';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
          <Stack.Screen name="Home" component={HomeScreen}
            options={
              {
                title: 'Главная'
              }
            }
          />
          <Stack.Screen name="Chat" component={ChatScreen} options={{
            'headerBackTitleVisible': false,
            title: 'Чат'
          }}
          initialParams={
            {
              chat_id: 123,
            }
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
