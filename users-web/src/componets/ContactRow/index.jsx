import React from 'react';
import styles from './styles';

const ContactRow = ({ contact, onSelect, isSelected }) => (
  <div style={isSelected ? styles.selected : styles.container} onClick={() => onSelect(contact)}>
    <div style={styles.imageContainer}>
      <img style={styles.image} src={contact.avatar} alt={contact.first_name} loading="lazy" />
    </div>
    <p style={styles.name}>{contact.first_name} {contact.last_name}</p>
  </div>
);

export default ContactRow;
