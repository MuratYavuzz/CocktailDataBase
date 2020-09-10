import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Ingredients from "../navi/Ingredients"

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark mb-1" light expand="md" >
        <NavbarBrand href="/">
          <h3>Cocktails Store</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/RandomCocktail/">Random Cocktail</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MostLatest/">Most Latest Cocktails</NavLink>
            </NavItem>
            <Ingredients></Ingredients>
          </Nav>
          <NavbarText>©Cocktail DB</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};


export default Navi;