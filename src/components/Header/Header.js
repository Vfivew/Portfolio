import { Icon } from '@iconify/react';

import { socialNetworks } from '../../resources/contact';
import "./Header.css";

const renderContactList = (contacts) => {
  return (
    <ul className="list-contact">
      {socialNetworks.map((contact, index) => (
        <li key={index} className="list-item">
          <a href={contact.link} className="icon-wrapper-header">
            <Icon className={contact.iconClass} icon={contact.icon} />
          </a>
        </li>
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