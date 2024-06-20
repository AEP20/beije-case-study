import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import {SliderComponentProps} from './type';

const SliderComponent: React.FC<SliderComponentProps> = ({
  title,
  minValue,
  maxValue,
  step = 10,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title + ' x ' + value}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#000000"
      />
      <View style={styles.valuesContainer}>
        <Text style={styles.valueLabel}>{minValue}</Text>
        <Text style={styles.valueLabel}>{maxValue}</Text>
      </View>
    </View>
  );
};

export default SliderComponent;
