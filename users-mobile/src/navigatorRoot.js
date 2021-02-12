import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import InfoProfile from './screens/InfoProfile';

const NavigatorRoot = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contactos" component={Home} options={{ headerShown: true, headerMode: true }} />
          <Stack.Screen name="Perfil" component={InfoProfile} options={{ headerShown: true, headerMode: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigatorRoot;
