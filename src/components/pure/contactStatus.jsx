import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


function ContactStatus(status) {
    const [connected, setConnected] =  useState(status);
    return (
      <div>
        <h3> {connected === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
        <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectarse' : 'Desconectarse'}</button>
      </div>
    );
  }
  
  ContactStatus.propTypes = {
    status: PropTypes.bool,
  };


export default ContactStatus;
