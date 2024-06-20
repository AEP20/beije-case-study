import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {SliderComponent} from '../../SliderComponent';
import {useDispatch, useSelector} from 'react-redux';
import {selectTamponValues} from '../../../store/selectors';
import {
  setMiniTampon,
  setStandardTampon,
  setSuperTampon,
} from '../../../store/actions';

const TabScreenThree: React.FC = () => {
  const dispatch = useDispatch();
  const tamponValues = useSelector(selectTamponValues);

  const handleSliderChange = (title: string) => (value: number) => {
    if (title === 'Mini Tampon') {
      dispatch(setMiniTampon(value));
    } else if (title === 'Standart Tampon') {
      dispatch(setStandardTampon(value));
    } else if (title === 'Süper Tampon') {
      dispatch(setSuperTampon(value));
    }
  };

  return (
    <View style={styles.container}>
      <SliderComponent
        title="Mini Tampon"
        minValue={0}
        maxValue={60}
        value={tamponValues.mini}
        onValueChange={handleSliderChange('Mini Tampon')}
      />
      <SliderComponent
        title="Standart Tampon"
        minValue={0}
        maxValue={60}
        value={tamponValues.standard}
        onValueChange={handleSliderChange('Standart Tampon')}
      />
      <SliderComponent
        title="Süper Tampon"
        minValue={0}
        maxValue={60}
        value={tamponValues.super}
        onValueChange={handleSliderChange('Süper Tampon')}
      />
    </View>
  );
};

export default TabScreenThree;
