import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Nombre1','Apellido1','email1@email.es', false);

    return (
        <div>
            <div>
                <h1>Contacto: </h1>
            </div>
            
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
