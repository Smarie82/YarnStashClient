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

        this.state = { isActive: false };
        
        
      }

      logout() {
        localStorage.clear();
        window.location.href = '/';
    }

      handleToggle() {
        this.setState({ isActive: !this.state.isActive });
      }

       render () {    
        return ( 
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">YarnStash</NavbarBrand>
              <NavbarToggler onClick={this.handleToggle} />
              <Collapse navbar>
                <Nav className="mr-auto" navbar>
                 
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      My Stash
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Yarn Stash
                      </DropdownItem>
                      <DropdownItem>
                        Pattern Stash
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Home
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/about/">About YarnStash</NavLink>
                  </NavItem>
                </Nav>
               
                <Button onClick={this.logout}>Logout</Button>
              </Collapse>
            </Navbar>
          </div>
         );
    }
}
 
export default YarnStashNav;