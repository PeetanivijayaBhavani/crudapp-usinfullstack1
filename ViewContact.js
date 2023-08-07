// ViewContact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ViewContact() {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`)
      .then((response) => {
        setContact(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  if (Object.keys(contact).length === 0) {
    return (
      <div style={{ marginTop: '100px' }}>
        <h2>Contact Details</h2>
        <p>Loading contact details...</p>
        <Link to="/">
          <input type='button' value='Back' />
        </Link>
      </div>
    );
    }
  return (
    <div style={{ marginTop: '100px' }}>
      <h2>Contact Details</h2>
      {Object.keys(contact).length > 0 ? (
      <div>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Contact:</strong> {contact.contact}</p>
      </div>
      ) : (
        <p>Loading contact details...</p>
      )}
      <Link to="/">
        <input type='button' value='Back' />
      </Link>
    </div>
  );
}

export default ViewContact;
