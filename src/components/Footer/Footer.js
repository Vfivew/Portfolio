import React from 'react';
import { Icon } from '@iconify/react';
import { contacts, socialNetworks } from '../../resources/contact';

import './Footer.css'

const renderContactList = (contacts) => {
  return contacts.map((contact, index) => (
    <li key={index}>
      <a href={contact.link} className="icon-wrapper">
        <Icon className={contact.iconClass} icon={contact.icon} />
        {contact.label}
      </a>
    </li>
  ));
};

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='contact'>
        <h2 className='contact-title'>Контакти:</h2>
        {renderContactList(contacts)}
      </ul>
      <ul className='socialNetworks'>
        <h2 className='contact-title'>Cоціальні мережі:</h2>
        {renderContactList(socialNetworks)}
      </ul>
      <div className="footer-text">
        <span>© 2023 • Усі права захищено.</span>
      </div>
    </footer>
    );
};

export default Footer;