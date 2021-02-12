import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontWeight: 'bold',
  },
});
