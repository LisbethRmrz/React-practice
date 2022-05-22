import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
  render(){ 
    //En NavLink estamos usando las propiedades que recibimos desde profile
    const navLinks = this.props.pages.map(page => {
      return (
        <a className="Link" key={page} href={'/'+page}>
          {page}
        </a> 
      )
    })
    return <nav className="NavBar">{navLinks}</nav>
  }
}

export default NavBar;

//Importamos nabvar en profile