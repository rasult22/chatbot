import React from 'react';
import { Text, Pressable } from 'react-native';
import { styled } from 'nativewind';

interface Props {
  title: string,
  type?: 'default' | 'alternative' | 'dark' | 'green' | 'yellow' | 'purple'
  onPress: () => void
}

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

const classes = {
  default: 'bg-blue-700 active:bg-blue-800 rounded-lg px-5 py-2.5',
  alternative: 'py-2.5 px-5 active:outline-none bg-white rounded-lg border border-gray-200 active:bg-gray-100 active:z-10',
  dark: 'bg-gray-800 active:bg-gray-900 active:outline-none rounded-lg px-5 py-2.5 mr-2 mb-2',
  green: 'active:outline-none bg-green-700 active:bg-green-800 rounded-lg px-5 py-2.5',
  red: 'active:outline-none bg-red-700 active:bg-red-800 rounded-lg text-sm px-5 py-2.5',
  yellow: 'active:outline-none bg-yellow-400 active:bg-yellow-500 rounded-lg text-sm px-5 py-2.5',
  purple: 'active:outline-none bg-purple-700 active:bg-purple-800 rounded-lg text-sm px-5 py-2.5'
}
const textClasses = {
  default: 'text-center text-white font-inter-500 text-sm',
  alternative: 'text-center text-gray-900 font-inter-500 hover:text-blue-700 text-sm',
  dark: 'text-center text-white text-sm font-inter-500',
  green: 'text-center font-inter-500 text-white',
  red: 'text-center text-white font-inter-500',
  yellow: 'text-center text-white font-inter-500',
  purple: 'text-center text-white font-inter-500'
}

const UIButton: React.FC<Props> =  ({ title, onPress, type = "default" }) => {
  return (
    <StyledPressable className={classes[type]} onPress={onPress}>
      <StyledText className={textClasses[type]} >{title}</StyledText>
    </StyledPressable>
  );
};

export default UIButton;