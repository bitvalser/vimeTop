import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profile: {
    margin: 5,
    borderColor: '#eee',
    borderWidth: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  profileInfo: {
    padding: 10,
    width: '50%',
    marginBottom: -2
  },
  nickname: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  role: {
    fontWeight: 'bold',
  },
  levelContainer: {
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    overflow: 'hidden',
  },
  loading: {
    backgroundColor: '#4caf50',
    height: 15,
  },
});

export default styles;
