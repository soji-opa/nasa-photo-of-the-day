import React, { useState } from 'react';

import { Collapse, Navbar,  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" light >
        <NavbarBrand  className="mr-auto text-uppercase" style={{color: "#fff"}}><Link to="/" style={{color: "#fff", textDecoration: "none"}}>Nasa&nbsp;  <i className="fas fa-home"></i></Link></NavbarBrand>
        <i onClick={toggleNavbar} className="mr-2 fas fa-bars" style={{color: "white"}} />
        
        <Collapse isOpen={!collapsed} navbar style={{color: "#fff"}}>
          <Nav navbar>
            <NavItem>
              <Link to="/donki" style={{color: "#fff", textDecoration: "none"}}>DONKI API</Link>
            </NavItem>
            <NavItem>
           
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;