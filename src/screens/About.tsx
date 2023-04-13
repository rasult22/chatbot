
import React from 'react';
import { View, Text } from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';
import UIButton from '../ui/button/ui-button';

type Props = StackScreenProps<RootStackParamList, 'About'>

const AboutScreen: React.FC<Props> = ({navigation}) => {
  return <View className="bg-red-400 flex flex-col w-full h-full items-center justify-center">
    <Text className="text-white font-inter-700 text-lg">
      AboutScreen
    </Text>
    <UIButton title='Go Home' onPress={() => {
      navigation.navigate('Home')
    }} />
  </View>
}

export default AboutScreen