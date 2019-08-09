import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4caf50',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4caf50',
  },
  selected: {
    backgroundColor: '#4caf50',
  },
  selectedText: {
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    padding: 5,
    borderColor: '#4caf50',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
