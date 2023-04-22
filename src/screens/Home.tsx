
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

  const onBtnPress = (screenName: "Home" | "Chat" | "ChatDavinci") => {
    navigation.navigate(screenName)
  }
  
  return <View className="h-full">
    <ScrollView>
      <UICell title="чат с GPT-3.5 Turbo" onPress={() => {
        onBtnPress('Chat')
      }} />
      <UICell title="чат с сарказмом text-davinci-003" onPress={()=> {
        onBtnPress('ChatDavinci')
      }} />
    </ScrollView>
    <Text className="text-white font-inter-700 text-md">
      {actionText}
    </Text>
  </View>
}

export default HomeScreen