import { NavLink } from "react-router-dom";

import { useEffect, useState } from "../../hooks/hooks";
import Logo from "../../resources/image/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      rootElement.style.overflow = isOpen ? "hidden" : "";
    }
  }, [isOpen]);

  return (
    <div className="nav-bar">
      <img className="nav-logo" src={Logo} alt="Логотип" />
      <nav className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" className="nav_list_link" onClick={closeMenu}>
          Головна
        </NavLink>
        <NavLink to="/aboutus" className="nav_list_link" onClick={closeMenu}>
          Про нас
        </NavLink>
        <NavLink
          to="/ourservices"
          className="nav_list_link"
          onClick={closeMenu}
        >
          Послуги
        </NavLink>
        <NavLink to="/contact" className="nav_list_link" onClick={closeMenu}>
          Контакти
        </NavLink>
      </nav>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
