
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';
import UIButton from '../ui/button/ui-button';
import {getChatResponse} from '../api/chat'
type Props = StackScreenProps<RootStackParamList, 'About'>

const AboutScreen: React.FC<Props> = ({navigation, route}) => {
  const [title, setTitle] = useState('About Screen')
  console.log('About Screen Visited')

  const apiCall = async () => {
    const response = await getChatResponse('Hey')
    setTitle(response.content)
  }

  const userName = (route.params && route.params.name) || 'guest'
  return <View className="bg-blue-400 flex flex-col w-full h-full items-center justify-center">
    <Text className="text-white font-inter-700 text-md">
      Hello {userName} !
    </Text>
    <Text className="text-white font-inter-700 text-lg ">
      { title }
    </Text>
    <UIButton title='Go Home' onPress={() => {
      navigation.navigate('Home', {
        actionText: title
      })
    }} />
    <View className="w-full px-3 mt-3 rounded-sm overflow-hidden">
      <TextInput
          multiline
          className="rounded-md p-4"
          placeholder="What's on your mind?"
          style={{width: '100%', height: 200, padding: 10, backgroundColor: 'white' }}
          value={title}
          onChangeText={(val) => {
            setTitle(val)
          }}
        />
    </View>
    <View className="mt-3">
      <UIButton type="green" title='Change title' onPress={() => {
        setTitle('Title changed')
        alert(1)
      }} />
    </View>
    <View className="mt-3">
      <UIButton type="green" title='Make api Call' onPress={apiCall} />
    </View>
  </View>
}

export default AboutScreen