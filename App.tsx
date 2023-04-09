import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UIButton from './src/ui/button/ui-button';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { styled } from 'nativewind';
function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="flex flex-col w-full h-full items-center justify-center">
      <Text className="text-red-500 font-inter-700 shadow-md bg-slate-300">Open up App.ts to start wor213king p!</Text>
      <StatusBar style="auto" />
      <View className="mt-4">
        <UIButton title="Default" onPress={() => {}} />
      </View>
    </View>
  );
}

export default App