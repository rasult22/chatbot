import React from 'react';
import { View } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
interface Props {
  value: number,
  disabled?: boolean,
  onValueChange: (value: Array<number>) => void
}

const UISlider: React.FC<Props> =  ({ value, onValueChange }) => {
  return (
    <Slider
    value={value} onValueChange={onValueChange}
    animationConfig={{}}
    containerStyle={{
    }
  }
  thumbTintColor='#FFEAC0'
  thumbStyle={
    {
      width: 14,
      height: 14
    }
  }
  trackStyle={{
      padding: 12,
      borderRadius: 222,
      backgroundColor: '#1F1C19',
      height: 22,
    }}
    minimumTrackStyle={
      {
        backgroundColor: '#625048'
      }
    }
    />
  );
};

export default UISlider;