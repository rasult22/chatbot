
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import UIButton from '../ui/button/ui-button'
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
  const onBtnPress = () => {
    navigation.navigate('Chat', {
      chat_id: 10
    })
  }
  return <View className=" bg-red-400 flex flex-col w-full h-full items-center justify-center">
    <Text className="text-white font-inter-700 text-lg">
      HomeScreen
    </Text>
    <Text className="text-white font-inter-700 text-md">
      {actionText}
    </Text>
    <UIButton title="Open Chat" onPress={onBtnPress} />
  </View>
}

export default HomeScreen