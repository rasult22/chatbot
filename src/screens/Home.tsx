
import React from 'react';
import { View, Text } from 'react-native';
import UIButton from '../ui/button/ui-button'
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const onBtnPress = () => {
    navigation.navigate('About')
  }
  return <View className="bg-red-400 flex flex-col w-full h-full items-center justify-center">
    <Text className="text-white font-inter-700 text-lg">
      HomeScreen
    </Text>
    <UIButton title="Go to About Page" onPress={onBtnPress} />
  </View>
}

export default HomeScreen