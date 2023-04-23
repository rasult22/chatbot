
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, ActivityIndicator } from 'react-native';
import UIButton from '../ui/button/ui-button'
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';
import {generateImageWithDALLE} from '../api/chat'

type Props = StackScreenProps<RootStackParamList, 'ImageGeneration'>

const ImageGenerationScreen: React.FC<Props> = () => {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('https://oaidalleapiprodscus.blob.core.windows.net/private/org-cfSTtNHS3cW54SwdAqeiJNdU/user-vwK7BamtuWo3MRSEzkSffWc9/img-sjrHaXivVsP0jtnZZcvA671T.png?st=2023-04-23T10%3A51%3A47Z&se=2023-04-23T12%3A51%3A47Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-23T11%3A13%3A21Z&ske=2023-04-24T11%3A13%3A21Z&sks=b&skv=2021-08-06&sig=t5X7N5iDtKRmZxlOYM6EJrQF1lIE0SRpJoDvnNhfdoM%3D')
  const onBtnPress = async () => {
    if (prompt && !isLoading) {
      setIsLoading(true)
      const url = await generateImageWithDALLE(prompt)
      setIsLoading(false)
      setUrl(url)
    }
  }
  
  return <View className="h-full">
    <ScrollView className="bg-orange-600 p-4">
      <Text className="font-inter-700 text-white text-lg">
        Генерация изображений с помощью DALL-E
      </Text>
      <Text className="font-inter-500 text-white text-md">
        Введите ваш prompt в поле и нажимете на кнопку generate
      </Text>
      <TextInput className="bg-slate-100 p-4 rounded-md mt-2" placeholder='Введите текст' value={prompt} onChangeText={setPrompt} />
      <View className="mt-4 max-w-[50%] mr-auto my-4 flex flex-row">
        <UIButton title='Generate' onPress={onBtnPress} />
        {isLoading && <ActivityIndicator color="white" className="ml-4" />}
      </View>
      <View className="mt-4">
        <Text className="font-inter-500 text-white text-md">
          Результат будет показан здесь:
        </Text>

        <View className="mt-4 bg-slate-500 p-4 rounded-md flex flex-col justify-center items-center">
          {url && <Image className="w-[256] h-[256] rounded-md" source={{
            uri: url
          }}
          />}
        </View>
      </View>
    </ScrollView>
  </View>
}

export default ImageGenerationScreen