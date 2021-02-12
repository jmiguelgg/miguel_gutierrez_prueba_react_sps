import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: height * 0.03,
  },
  imageContainer: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.4,
    marginBottom: height * 0.02,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  email: {
    fontSize: 20,
  },
});
