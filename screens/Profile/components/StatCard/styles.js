import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 5,
    borderColor: '#eee',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  header: {
    backgroundColor: '#e2e2e2',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    padding: 10,
  },
  spacer: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    height: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    color: '#4caf50',
  },
});

export default styles;
