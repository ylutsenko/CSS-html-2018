import React from "react";

import './Header.css';

const Header = ({ children }) => (
  <header className='Header'>
    <h1>{children}</h1>
  </header>
);

export default Header;
