
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import UIButton from '../../ui/button/ui-button'
import UICell from '../../ui/cell/ui-cell'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedTab from './Feed';
import MessagesTab from './Messages'; 
type Props = StackScreenProps<RootStackParamList, 'AlterHome'>

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const Tab = createBottomTabNavigator()
  
  const onBtnPress = (screenName: "Home" | "Chat" | "CompletionDavinci" | "ImageGeneration" | "AlterHome") => {
    navigation.navigate(screenName)
  }
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedTab} options={
        {
          'headerLeft': () => (<Pressable onPress={() => {onBtnPress('Home')}} className="p-2"><Text className="font-inter-500 text-base">Back</Text></Pressable>),
        }
      } />
      <Tab.Screen name="Messages" component={MessagesTab} />
    </Tab.Navigator>
  )
}
export default HomeScreen