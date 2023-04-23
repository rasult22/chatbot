
import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack'
import DropDownPicker from 'react-native-dropdown-picker';
import { RootStackParamList } from '../../App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from '@react-native-community/hooks';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import UIButton from '../ui/button/ui-button';
import { getTextCompletion } from '../api/chat';
import { Languages } from '@rivascva/react-native-code-editor/lib/typescript/languages';

type Props = StackScreenProps<RootStackParamList, 'Chat'>


const CompletionScreen: React.FC<Props> = ({navigation, route}) => {
  const insets = useSafeAreaInsets()
  const keyboard = useKeyboard()
  const [rerenderState, setRerender] = useState(true)
  const [codeInput, setCodeInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false);

  const [languages, setLanguages] = useState([
      { value: 'typescript', label: 'TypeScript' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'go', label: 'GO' },
      { value: 'csharp', label: 'c#' }
  ])
  const [language, setLang] = useState('typescript')
  
  const generateCompletion = async () => {
    if (!codeInput) return
    setIsLoading(true)
    const text = await getTextCompletion(codeInput)
    setIsLoading(false)
    setRerender(false)
    setCodeInput(codeInput + text)
    setTimeout(() => {
      setRerender(true)
    },0)
  }
  
  return <ScrollView style={{flex: 1, paddingBottom: insets.bottom}} className="bg-slate-900">
    <Text className="p-4 text-lg text-white font-inter-700">
      Code Completion
    </Text>
    <Text className="px-4 text-md text-white font-inter-500">
      Пример того, как text-davinci-003 может работать как Github Copilot
    </Text>
    <Text className="px-4 text-md text-white font-inter-500 mt-2">
      Как юзать: Введите начало кода или добавьте комментарии, затем нажмите на кнопку "Generate"
    </Text>

    <View className='px-4 max-w-[50%] mr-auto my-4 flex flex-row'>
      <UIButton title='Generate' onPress={generateCompletion} />
      {isLoading && <ActivityIndicator className="ml-4" />}
    </View>
    <View className='px-4 mb-4 z-50 '>
      <Text className="text-md text-white font-inter-500 my-2">
        Язык программирования
      </Text>
      <DropDownPicker
        open={open}
        value={language}
        items={languages}
        setOpen={setOpen}
        setValue={setLang}
        setItems={setLanguages}
      />
    </View>
    {rerenderState && <CodeEditor
        onChange={(value) => {
          setCodeInput(value)
        }}
        initialValue={codeInput}
        style={{
            ...{
                fontSize: 12,
                inputLineHeight: 26,
                highlighterLineHeight: 26,
            },
            ...(keyboard.keyboardShown
                ? { marginBottom: keyboard.keyboardHeight - insets.bottom }
                : {}),
        }}
        language={language as Languages}
        syntaxStyle={CodeEditorSyntaxStyles.monokaiSublime}
        showLineNumbers
    />
    }
  </ScrollView> 
}

export default CompletionScreen