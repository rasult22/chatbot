import { StatusBar } from 'expo-status-bar';
import { Image,TextInput, SafeAreaView, Switch, Button, Text, View, ActivityIndicator } from 'react-native';
import UIButton from './src/ui/button/ui-button';
import React, { useState } from 'react';
// [[[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]]]

const Test: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');


  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <View className='p-[40px] rounded-[15px] shadow-md bg-slate-300'>
          <Text className="text-[40px] font-inter-700">
            Hello World!
          </Text>
        </View>
        <Image
          className="w-[50px] h-[50px] mt-2"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View className='w-full px-4 flex justify-center'>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <TextInput
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
        <View>
          <ActivityIndicator animating size="large" />
          <UIButton type="green" title="Default" onPress={() => {}} />
          <Button color="#d3f3c3" title='Button' />
        </View>
    </SafeAreaView>
  );
}

export default Test