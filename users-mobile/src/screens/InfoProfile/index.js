import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const InfoProfile = ({ navigation, route }) => {
  const { contact } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: contact.avatar }} />
      </View>
      <Text style={styles.name}>{contact.first_name} {contact.last_name}</Text>
      <Text style={styles.email}>email: {contact.email}</Text>
    </View>
  );
};

export default InfoProfile;
