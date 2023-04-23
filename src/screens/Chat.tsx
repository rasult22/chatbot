
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack'
import { RootStackParamList } from '../../App';
import UIButton from '../ui/button/ui-button';
import uuid from 'react-native-uuid';
import {getChatResponse} from '../api/chat'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatMessage } from '../types/openai';
type Props = StackScreenProps<RootStackParamList, 'Chat'>


const ChatScreen: React.FC<Props> = ({navigation, route}) => {
  const [title, setTitle] = useState('')
  const insets = useSafeAreaInsets()
  const allowSend = useRef(true)
  const [messages, setMessages] = useState<IMessage[]>([]);
  const contextMessages = useRef<ChatMessage[]>([])
  const chatGTP =  {
    _id: 2,
    name: 'GTP-3.5 Turbo',
    avatar: 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
  }
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Start chatting with GPT',
        createdAt: new Date(),
        system: true,
        user:chatGTP
      },
    ])
    alert('Модель настроена на то, чтобы отвечать на сообщения коротко в целях экономии токенов')
  }, [])
  
  const onSend = useCallback(async (messages: IMessage[] = [], isGPT?: boolean) => {
    if (!allowSend.current) return 
    const prompt = messages[0].text // get user message
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    if(!isGPT) {
      onGPTSend(prompt)
    }
  }, [])

  const onGPTSend = async (prompt: string) => {
    contextMessages.current.push({ role: 'user', content: prompt }) // add it to the context stack
    allowSend.current = false // block chat
    const message = await getChatResponse(contextMessages.current) // get response from ai
    contextMessages.current.push({role: 'assistant', content: message})
    allowSend.current = true // unblock chat
    onSend([
      {
        _id: uuid.v4() as string,
        text: message,
        createdAt: new Date(),
        user: chatGTP
      }
    ], true)
  }
  return <View style={{flex: 1, paddingBottom: insets.bottom}}>
    <GiftedChat bottomOffset={insets.bottom} isTyping={!allowSend.current} alwaysShowSend={false} messages={messages} onSend={onSend}/> 
  </View> 
}

export default ChatScreen