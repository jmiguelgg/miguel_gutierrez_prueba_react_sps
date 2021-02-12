import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
  },
  imageContainer: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    marginLeft: 20,
  },
});
