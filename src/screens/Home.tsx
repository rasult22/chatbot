
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import UIButton from '../ui/button/ui-button'
import UICell from '../ui/cell/ui-cell'
import UISlider from '../ui/slider/ui-slider';
import UIIconButton from '../ui/button/ui-icon-button';
import UIImageCard from '../ui/cards/ui-image-card';
import UISwitch from '../ui/switch/ui-switch';
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const [actionText, setActionText] = useState('')
  const [value, setValue] = useState(0.4)
  const [gender, setGender] = useState<'male' | 'female'>('male');
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
    <ScrollView className="px-3 bg-white">
      <Text>{gender}</Text>
      <UISwitch value={gender} onValueChange={(gender) => {
        setGender(gender)
      }} />
      <View className='flex flex-row flex-wrap ios:gap-3 mt-3 px-[16px]'>
        <View>
          <UIImageCard 
            icon={<UIIconButton type="dark" iconName="cloud-download" iconColor='#FFEAC0' onPress={() =>{}} />} 
            title='Ryan McCarthy'
            onPress={() => {}} />
        </View>
        <View>
          <UIImageCard onPress={() => {}} imageSrc='https://static.wikia.nocookie.net/villains/images/7/75/Ryan_The_Terror_McCarthy.jpg' />
        </View>
        <View>
          <UIImageCard onPress={() => {}} />
        </View>
      </View>
      <UIIconButton onPress={() =>{}} iconName="cloud-download" iconColor='black' />
      <UIIconButton type="dark" iconName="cloud-download" iconColor='white' onPress={() =>{}} />
      <UIIconButton type="dark" iconName="close" iconColor='#FFEAC0' onPress={() =>{}} />
      <UIIconButton iconName="user" iconColor='black' minWidth={80} onPress={() =>{}} />
      <UIIconButton type="dark" iconName="user" iconColor='#FFEAC0' minWidth={80} onPress={() =>{}} />
      <UIIconButton iconName="image" iconColor='black' minWidth={80} onPress={() =>{}} />
      <UIIconButton type="dark" iconName="image" iconColor='#FFEAC0' minWidth={80} onPress={() =>{}} />
      <UIIconButton type="dark" iconName="image" title='Your Gallery' iconColor='#FFEAC0' minWidth={150} onPress={() =>{}} />
      <UIIconButton iconName="image" title='Your Gallery' iconColor='black' minWidth={150} onPress={() =>{}} />
      <UISlider value={value} onValueChange={() => {}} />
      <UIButton minWidth={250} type="accent" title='Dream' onPress={() => {}} />
      <UIButton type="bright" title='Dream' onPress={() => {}} />
      <UIButton type="dark" title='Dream' onPress={() => {}} />
      <UIButton type="accent" title='Dream' disabled onPress={() => {}} />
      <UIButton type="bright" title='Dream' disabled onPress={() => {}} />
      <UIButton type="dark" title='Dream' disabled onPress={() => {}} />
      <Text className="text-white font-inter-700 text-md">
        {actionText}
      </Text>
    </ScrollView>
  </View>
}

export default HomeScreen