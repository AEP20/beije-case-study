import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default {
  screenWidth: () => Dimensions.get('window').width,
  screenHeight: () => Dimensions.get('window').height,
  wp: (val: string | number) => widthPercentageToDP(val),
  hp: (val: string | number) => heightPercentageToDP(val),
};
