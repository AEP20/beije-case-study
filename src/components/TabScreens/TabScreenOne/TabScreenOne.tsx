import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {SliderComponent} from '../../SliderComponent';
import {useDispatch, useSelector} from 'react-redux';
import {selectPedValues} from '../../../store/selectors';
import {
  setStandardPed,
  setSuperPed,
  setSuperPlusPed,
} from '../../../store/actions';

const TabScreenOne: React.FC = () => {
  const dispatch = useDispatch();
  const pedValues = useSelector(selectPedValues);

  const handleSliderChange = (title: string) => (value: number) => {
    if (title === 'Standart Ped') {
      dispatch(setStandardPed(value));
    } else if (title === 'Süper Ped') {
      dispatch(setSuperPed(value));
    } else if (title === 'Süper+ Ped') {
      dispatch(setSuperPlusPed(value));
    }
  };

  return (
    <View style={styles.container}>
      <SliderComponent
        title="Standart Ped"
        minValue={0}
        maxValue={60}
        value={pedValues.standard}
        onValueChange={handleSliderChange('Standart Ped')}
      />
      <SliderComponent
        title="Süper Ped"
        minValue={0}
        maxValue={60}
        value={pedValues.super}
        onValueChange={handleSliderChange('Süper Ped')}
      />
      <SliderComponent
        title="Süper+ Ped"
        minValue={0}
        maxValue={60}
        value={pedValues.superPlus}
        onValueChange={handleSliderChange('Süper+ Ped')}
      />
    </View>
  );
};

export default TabScreenOne;
