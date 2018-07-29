import React, { Component } from 'react';

import Flag from '../icons/hamburg.png';

class Header extends Component {
  render () {
    return (
      <header className="logo" role="banner">
        <img className="flag" alt="Logo" src={Flag}/>
        <h2 className="slogan">Hamburg City</h2>
      </header>
    );
  }
}

export default Header;
