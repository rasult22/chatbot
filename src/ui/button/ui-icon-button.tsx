import React from 'react';
import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
  disabled?: boolean,
  minWidth?: number,
  iconName: string,
  iconColor: string,
  title?: string,
  type?: 'accent' | 'dark'
  onPress: () => void
}

const StyledPressable = styled(Pressable)

const classes = {
  accent: 'rounded-[32px] h-[35px] flex flex-row justify-center items-center',
  dark: 'rounded-[32px] h-[35px] flex flex-row justify-center items-center',
  pressable: {
    accent: 'active:opacity-[0.8]',
    dark: 'active:opacity-[0.8]',
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

const UIIconButton: React.FC<Props> =  ({ title, minWidth, iconName = "cloud-download", iconColor = "black", onPress, type = "accent" }) => {
  return (
    <StyledPressable style={{flex: 1, flexDirection: 'row'}} className={classes.pressable[type]} onPress={onPress}>
        <LinearGradient
          colors={gradients[type].colors}
          start={gradients[type].start}
          end={gradients[type].end}
          style={{width: minWidth ? minWidth : 35}}
          className={classes[type]}>
          <FontAwesome name={iconName} color={iconColor} size={20} />
          {title && <Text className={`font-inter-500 ml-2 text-base`} style={{color: type==='dark' ? '#FFEAC0' : 'black'}}>{title}</Text>}
        </LinearGradient>
    </StyledPressable>
  );
};

export default UIIconButton;