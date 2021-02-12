import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import InfoProfile from './screens/InfoProfile';

const NavigatorRoot = () => {
  const [showSplash, setShowSplash] = useState(true);
  const Stack = createStackNavigator();
  
  useEffect(() => {
    const timer = setTimeout(() => { setShowSplash(false) }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {showSplash && <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false, headerMode: false }}
          />}
          <Stack.Screen name="Contactos" component={Home} />
          <Stack.Screen name="Perfil" component={InfoProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigatorRoot;
