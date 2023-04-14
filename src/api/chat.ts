import axios from 'axios'
import { apiKey } from '../../env'

export async function getChatResponse(prompt: string): Promise<{
  content: string
}> {

  let result = {
    content: ''
  }
  const requestBody = {
    "model": "gpt-3.5-turbo",
    "frequency_penalty":0,
    "max_tokens": 256,
    "temperature": 0.7,
    "top_p": 1,
    "presence_penalty": 0,
    "stream": true,
    "messages":[
        {"role": "system", "content": "You are a football manager."},
        {"role": "user", "content": "What the plan for this match, coach?"}
    ]
  }

  axios.post('https://api.openai.com/v1/chat/completions',{
    ...requestBody
  },
  {  
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
  }).then(response => {
    console.log('process started')
    response.data.on('data', (chunk: any) => {
      console.log(typeof chunk)
      try {
        const parsed = JSON.parse(chunk)
        console.log('parsed', parsed)
      } catch {
        alert('wroong')
      }
        
      // if (parsed.choices[0].finish_reason === 'stop') {
        //   return
      // }
      // if (parsed.choices[0].delta) {
      //   result.content += parsed.choices[0].delta.content
      // }
      // console.log(result.content)
    })
    alert('api call made')
  }).catch(error => {
    // alert(error.message)
  })
  return result

  // return chatResponse;
}