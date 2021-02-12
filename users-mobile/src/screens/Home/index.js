import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
};

export default Home;
