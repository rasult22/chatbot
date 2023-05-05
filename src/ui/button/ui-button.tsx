import React from 'react';
import { Text, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
  title: string,
  disabled?: boolean,
  minWidth?: number,
  type?: 'accent' | 'bright' | 'dark'
  onPress: () => void
}

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

const classes = {
  accent: 'rounded-[32px] px-[32px] py-[16px]',
  bright: 'py-[16px] px-[32px] rounded-[32px]',
  dark: 'px-[32px] rounded-[16px] py-[8px]',
  pressable: {
    accent: 'border-2 min-w-[250px] active:border-[#FFEAC0] rounded-[32px]',
    bright: 'border-2 active:border-[#FFEAC0] rounded-[32px]',
    dark: 'border-2 active:border-[#FFEAC0] rounded-[16px]',
  }
}
const textClasses = {
  accent: 'text-center text-black font-inter-700 text-base',
  bright: 'text-center text-[#FFEAC0] font-inter-700 text-base',
  dark: 'text-center text-[#FFEAC0] text-base font-inter-700',
  disabled: {
    accent: 'text-center text-[#1F1C19] font-inter-700 text-base',
    bright: 'text-center text-[#1F1C19] font-inter-700 text-base',
    dark: 'text-center text-[#3E322D] text-base font-inter-700',
  }
}
const gradients = {
  disabled: {
    accent: {
      colors: ['#625048', '#625048'],
    },
    bright: {
      colors: ['#625048', '#625048'],
    },
    dark: {
      colors: ['#1F1C19', '#1F1C19'],
    }
  },
  accent: {
    colors: ['#FFFFFF', '#D8B580'],
    start: {x: 1, y: -1.4},
    end: {x: 1, y: 1}
  },
  bright: {
    colors: ['#625048', '#625048'],
    start: {x: 1, y: -1.4},
    end: {x: 1, y: 1}
  },
  dark: {
    colors: ['#1F1C19', '#1F1C19'],
    start: {x: 1, y: -1.4},
    end: {x: 1, y: 1}
  }
}

const UIButton: React.FC<Props> =  ({ title, minWidth, onPress, disabled, type = "accent" }) => {
  return (
    <StyledPressable style={{flex: 1, flexDirection: 'row'}} onPress={onPress}>
      <StyledPressable style={{minWidth: minWidth ? minWidth : 0 }} className={classes.pressable[type]}>
        <LinearGradient
          colors={disabled ? gradients.disabled[type].colors  : gradients[type].colors}
          start={gradients[type].start}
          end={gradients[type].end}
          className={classes[type]}>
          <StyledText className={disabled ? textClasses.disabled[type] : textClasses[type]} >{title}</StyledText>
        </LinearGradient>
      </StyledPressable>
    </StyledPressable>
  );
};

export default UIButton;