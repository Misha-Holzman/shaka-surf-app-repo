import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  faSignInAlt,
  faCogs,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarStart,
  NavbarEnd,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
} from 'bloomer';

import brand from './GA_logo.png';

export default () => (
  <Navbar className="is-black">
    <NavbarBrand>
      <NavbarItem>
        <a href="http://ga.co"> <img src={brand} style={{ marginRight: 5 }} /> </a>
      </NavbarItem>
    </NavbarBrand>
    <NavbarStart>
      <NavbarItem><NavLink to="/tasks">Tasks</NavLink></NavbarItem>
    </NavbarStart>
    <NavbarEnd>
      <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden="touch">
        <NavLink to="/login">Sign in &nbsp;</NavLink>
        <FontAwesomeIcon icon={faSignInAlt} />
      </NavbarItem>
      <NavbarItem hasDropdown isHoverable>
        <NavbarLink href="#/documentation">
          <FontAwesomeIcon icon={faUser} fixedWidth />
          <span>Jason Seminara</span>
        </NavbarLink>
        <NavbarDropdown>
          <NavbarItem href="#/">
            <FontAwesomeIcon icon={faCogs} fixedWidth />
            <span>settings</span>
          </NavbarItem>
          <NavbarDivider />
          <NavbarItem href="#/">
            <FontAwesomeIcon icon={faSignOutAlt} fixedWidth />
            <span>Sign out</span>
          </NavbarItem>
        </NavbarDropdown>
      </NavbarItem>
    </NavbarEnd>
  </Navbar>
);
