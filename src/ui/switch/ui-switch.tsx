import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Props {
  value: 'male' | 'female',
  disabled?: boolean,
  onValueChange: (gender: 'male' | 'female') => void
}

const UISwitch: React.FC<Props> =  ({ value, onValueChange }) => {
  const progress = useRef(new Animated.Value(value === 'male' ? 0 : 1)).current

  const translationX =  progress.interpolate({
    inputRange: [0,1],
    outputRange: [1, 48]
  }) 
  return (
    <View>
      <View className='bg-[#0E0B09] flex flex-row items-center justify-center rounded-[999px] space-x-2 w-[100px] px-[8px] py-[4px]'>
      
        <Animated.View
          style={{
              width: 38,
              height: 38,
              transform: [{translateX: translationX}]
            }} 
          className='bg-[#625048] rounded-full absolute z-[-1] left-[4px] top-[4px]' />
        
        <Pressable onPress={() => {
          Animated.timing(progress, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true
          }).start()
          onValueChange('male')
        }} className='py-[6px]' style={{width: 38, height: 38}} >
          <MaterialCommunityIcons name="face-man" color="#FFEAC0" size={24} />
        </Pressable>

        <Pressable onPress={() => {
          Animated.timing(progress, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
          }).start()
          onValueChange('female')
        }} className='py-[6px]' style={{width: 38, height: 38}}>
          <MaterialCommunityIcons name="face-woman" color="#FFEAC0" size={24} />
        </Pressable>
      
      </View>
    </View>
  );
};

export default UISwitch;