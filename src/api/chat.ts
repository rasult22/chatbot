import axios from 'axios'
import { apiKey } from '../../env'
import { ChatMessageResponse, ChatMessage } from '../types/openai'  

const config = {
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  }
}

export async function getChatResponse(context: ChatMessage[]): Promise<string> {
  const messages = [
    {"role": "system", "content": "Always answer only with five words. If you don't understand question just say: Mmmmmm"},
    ...context
  ]
  const response: {
    data: ChatMessageResponse
  } = await axios.post('https://api.openai.com/v1/chat/completions', {
    "model": "gpt-3.5-turbo",
     "frequency_penalty":0,
     "max_tokens": 256,
     "temperature": 0.3,
     "top_p": 1,
     "presence_penalty": 0,
     "messages": messages
  }, config)
  if (response.data && response.data.choices && response.data.choices[0].message) {
    return response.data.choices[0].message.content 
  }
  return ''
}
  //   const stream = await OpenAI("chat",{
  //    "model": "gpt-3.5-turbo",
  //    "frequency_penalty":0,
  //    "max_tokens": 256,
  //    "temperature": 0.7,
  //    "top_p": 1,
  //    "presence_penalty": 0,
  //    "messages":[
  //        {"role": "system", "content": "You are a football manager. Always answer only with five words, even tho it has no meaning."},
  //        {"role": "user", "content": "What the plan for this match, coach?"}
  //    ]
  //  }, {
  //    apiKey: apiKey
  //  })
export async function getTextCompletion(prompt: string): Promise<string> {
  const response = await axios.post('https://api.openai.com/v1/completions', {
    "model": "text-davinci-003",
    "prompt": prompt,
    "temperature": 0.5,
    "n": 1,
    "max_tokens": 50
  }, config)

  if (response.data && response.data.choices) {
    return response.data.choices[0].text
  } else {
    return prompt + '\n // api call error'
  }
}