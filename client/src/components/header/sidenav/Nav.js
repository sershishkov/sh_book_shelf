import React from 'react';
import SideNav from 'react-simple-sidenav';

const Nav = (props) => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav= {props.onHideNav}
      navStyle={{
        background:'#242424',
        color:'white',
        maxWidth:'220px'
      }}
    >
    items
    </SideNav>
  );
};

export default Nav;