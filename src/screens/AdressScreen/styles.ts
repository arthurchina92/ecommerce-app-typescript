import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  row: {
    flexDirection: 'row',
  },
  container: {
    marginLeft: 20,
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorLabel: {
    color: 'red',
    marginLeft: 10,
  },
  pickerText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default styles;
