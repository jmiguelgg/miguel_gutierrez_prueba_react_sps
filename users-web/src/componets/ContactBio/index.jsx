import React from 'react';
import styles from './styles';

const ContactBio = ({ contact }) => (
  <div style={styles.container}>
    <div style={styles.imageContainer}>
      <img style={styles.image} src={contact.avatar} alt={contact.first_name} />
    </div>
    <p style={styles.name}>{contact.first_name} {contact.last_name}</p>
    <p>email: {contact.email}</p>
  </div>
);

export default ContactBio;
