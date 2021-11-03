import { Component } from 'react';
import { Collapse,
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
    Button
  } from 'reactstrap';

    class YarnStashNav extends Component {
      constructor(props) {
        super(props);

        this.state = { NavBar: "" }
        this.handleLogout = this.handleLogout.bind(this);
      }

      handleLogout() {
        this.props.handleLogout();
      }

      

       render () {    
        return ( 
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">YarnStash</NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                <Button onClick={this.handleLogout}>Logout</Button>
              </Collapse>
            </Navbar>
          </div>
         );
    }
}
 
export default YarnStashNav;