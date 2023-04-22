import React from 'react';
import { Text, Pressable } from 'react-native';
import { styled } from 'nativewind';
import EvilIcons from '@expo/vector-icons/EvilIcons'
interface Props {
  title: string,
  type?: 'default' | 'alternative' | 'dark' | 'green' | 'yellow' | 'purple'
  onPress: () => void
}

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)


const UICell: React.FC<Props> =  ({ title, onPress, type = "default" }) => {
  return (
    <StyledPressable className="bg-white p-4 border-b border-b-slate-100 flex flex-row justify-between" onPress={onPress}>
      <StyledText className="text-lg">{title}</StyledText>
      <EvilIcons name="chevron-right" size={32} color='grey' />
    </StyledPressable>
  );
};

export default UICell;