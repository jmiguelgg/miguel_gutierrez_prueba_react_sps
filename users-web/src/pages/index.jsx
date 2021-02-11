import React, { useEffect, useState } from 'react';
import styles from './styles';
import ContactRow from '../componets/ContactRow';
import ContactBio from '../componets/ContactBio';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [contactSelected, setContactSelected] = useState({});
  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((result) => {
      setContactSelected(result.data[0])
      setContacts(result.data);
    })
  }, []);

  const showContacts = (list) => list.map((item) => <ContactRow contact={item} onSelect={(contact) => setContactSelected(contact)} />);

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.textHeader}>Lista de contactos</h1>
      <div style={styles.listContainer}>
        <div style={styles.contactList}>
          {showContacts(contacts)}
        </div>
        <ContactBio contact={contactSelected} />
      </div>
    </div>
  );
};

export default Home;
