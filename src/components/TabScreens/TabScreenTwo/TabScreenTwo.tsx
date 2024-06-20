import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {SliderComponent} from '../../SliderComponent';
import {useDispatch, useSelector} from 'react-redux';
import {selectDailyPedValues} from '../../../store/selectors';
import {setDailyPed, setSuperDailyPed} from '../../../store/actions';

const TabScreenTwo: React.FC = () => {
  const dispatch = useDispatch();
  const dailyPedValues = useSelector(selectDailyPedValues);

  const handleSliderChange = (title: string) => (value: number) => {
    if (title === 'Günlük Ped') {
      dispatch(setDailyPed(value));
    } else if (title === 'Süper Günlük Ped') {
      dispatch(setSuperDailyPed(value));
    }
  };
  return (
    <View style={styles.container}>
      <SliderComponent
        title="Günlük Ped"
        minValue={0}
        maxValue={60}
        value={dailyPedValues.daily}
        onValueChange={handleSliderChange('Günlük Ped')}
      />
      <SliderComponent
        title="Süper Günlük Ped"
        minValue={0}
        maxValue={60}
        value={dailyPedValues.superDaily}
        onValueChange={handleSliderChange('Süper Günlük Ped')}
      />
    </View>
  );
};

export default TabScreenTwo;
