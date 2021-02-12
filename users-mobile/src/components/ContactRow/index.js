import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ContactRow = ({ contact, onSelect }) => (
  <TouchableOpacity style={styles.container} onPress={() => onSelect(contact)}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ url: contact.avatar }} />
    </View>
    <Text style={styles.name}>{contact.first_name} {contact.last_name}</Text>
  </TouchableOpacity>
);

export default ContactRow;
