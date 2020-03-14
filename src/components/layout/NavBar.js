import React, { useState } from 'react';

import { Collapse, Navbar,  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" light >
        <NavbarBrand href="/" className="mr-auto text-uppercase" style={{color: "#fff"}}>Nasa&nbsp;  <i className="fas fa-home"></i></NavbarBrand>
        <i onClick={toggleNavbar} className="mr-2 fas fa-bars" style={{color: "white"}} />
        
        <Collapse isOpen={!collapsed} navbar style={{color: "#fff"}}>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" style={{color: "#fff"}}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{color: "#fff"}}>GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;