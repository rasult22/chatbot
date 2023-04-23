
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import UIButton from '../ui/button/ui-button'
import UICell from '../ui/cell/ui-cell'
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const [actionText, setActionText] = useState('')
  useEffect(() => {
    if (route.params?.actionText) {
      setActionText(route.params.actionText)
    }
  }, [route.params?.actionText])

  const onBtnPress = (screenName: "Home" | "Chat" | "CompletionDavinci" | "ImageGeneration" | "AlterHome") => {
    navigation.navigate(screenName)
  }
  
  return <View className="h-full">
    <ScrollView>
      <UICell title="AlterHome" onPress={() => {
        onBtnPress('AlterHome')
      }} />
      <UICell title="чат с GPT-3.5 Turbo" onPress={() => {
        onBtnPress('Chat')
      }} />
      <UICell title="Code Copilot с text-davinci-003 и др." onPress={()=> {
        onBtnPress('CompletionDavinci')
      }} />
      <UICell title="Редактирование с инструкцией (davinci)" onPress={()=> {
        // onBtnPress('CompletionDavinci')
      }} />
      <UICell title="Генерация изображений DALL-E" onPress={()=> {
        onBtnPress('ImageGeneration')
      }} />
      <UICell title="audio to text Whisper" onPress={()=> {
        // onBtnPress('CompletionDavinci')
      }} />
    </ScrollView>
    <Text className="text-white font-inter-700 text-md">
      {actionText}
    </Text>
  </View>
}

export default HomeScreen