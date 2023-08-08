import React from 'react';
import './Header.css'
import { Icon } from '@iconify/react';
import { socialNetworks } from '../../resources/contact';

const renderContactList = (contacts) => {
  return (
    <ul className='list-contact'>
      {socialNetworks.map((contact, index) => (
        <a key={index} href={contact.link} className="icon-wrapper-header">
          <Icon className={contact.iconClass} icon={contact.icon} />
        </a>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Make Up</h1>
        <a className='phone-number' href="tel:380999999999">+380999999999</a>
      {renderContactList(socialNetworks)}
    </header>
  );
};

export default Header;