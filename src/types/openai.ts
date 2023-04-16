export type Choice = {
  delta: {
    content: string
  },
  message?: ChatMessage
  index: number,
  finish_reason: string | null
}
export interface ChatMessageResponse  {
  "id": string,
  "object": string,
  "created": number,
  "model": string,
  "choices": Choice[]
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system',
  content: string
}