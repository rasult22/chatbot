import React from 'react';
import { Text, Pressable, ImageBackground, View } from 'react-native';
import { styled } from 'nativewind';
interface Props {
  title?: string,
  icon?: any,
  imageSrc?: string,
  onPress: () => void
}

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)



const UIImageCard: React.FC<Props> =  ({ icon, title="Skinny with Hairs", onPress, imageSrc="https://static.wikia.nocookie.net/villains/images/e/e0/Ryan_McCarthy.jpg"}) => {
  return (
    <StyledPressable className='flex justify-center items-center w-[140px] h-[170px] border-[6px] border-transparent active:border-[#FFEAC0] overflow-hidden rounded-[16px]' onPress={onPress}>
      {icon && <View className='absolute z-10 top-[16px] left-[16px]'>{icon}</View>}
      <ImageBackground className='flex w-[140px] h-[170px] justify-end p-[16px]' source={{uri: imageSrc}} resizeMode="cover">
        <StyledText className="text-[#FFEAC0] font-inter-500 max-w-[90px] break-words text-base" textBreakStrategy="balanced">{title}</StyledText>
      </ImageBackground>
    </StyledPressable>
  );
};

export default UIImageCard;