import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  valueLabel: {
    fontSize: 14,
  },
  selectedValue: {
    fontSize: 16,
  },
});
