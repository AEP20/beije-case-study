import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  clearButton: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,

  },
});
