import React from 'react';
import { Pressable } from 'react-native';
import { styled } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
  iconName: string,
  iconColor: string,
  type?: 'accent' | 'dark'
  onPress: () => void
}

const StyledPressable = styled(Pressable)

const classes = {
  accent: 'rounded-[32px] w-[35px] h-[35px] flex justify-center items-center',
  dark: 'rounded-[32px] w-[35px] h-[35px] flex justify-center items-center',
  pressable: {
    accent: 'border-2 active:border-[#FFEAC0] rounded-[32px]',
    dark: 'border-2 active:border-[#FFEAC0] rounded-[32px]',
  }
}
const gradients = {
  accent: {
    colors: ['#FFFFFF', '#D8B580'],
    start: {x: 1, y: -1.4},
    end: {x: 1, y: 1}
  },
  dark: {
    colors: ['#1F1C19', '#1F1C19'],
    start: {x: 1, y: -1.4},
    end: {x: 1, y: 1}
  }
}

const UIIconButton: React.FC<Props> =  ({ iconName = "cloud-download", iconColor = "black", onPress, type = "accent" }) => {
  return (
    <StyledPressable style={{flex: 1, flexDirection: 'row'}} onPress={onPress}>
      <StyledPressable className={classes.pressable[type]}>
        <LinearGradient
          colors={gradients[type].colors}
          start={gradients[type].start}
          end={gradients[type].end}
          className={classes[type]}>
          <FontAwesome name={iconName} color={iconColor} size={20} />
        </LinearGradient>
      </StyledPressable>
    </StyledPressable>
  );
};

export default UIIconButton;