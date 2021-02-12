import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import ContactRow from '../../components/ContactRow';

const Home = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((result) => {
      setContacts(result.data);
    })
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactRow contact={item} onSelect={(contact) => navigation.navigate('Perfil',contact)} />}
      />
    </View>
  );
};

export default Home;
