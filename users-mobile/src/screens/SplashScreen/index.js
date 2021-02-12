import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 50,
      friction: 3,
      tension: 70,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.welcome, {fontSize: animatedValue}]}
      >
        Usuarios
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
