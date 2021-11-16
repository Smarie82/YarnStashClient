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
    Button,
  } from 'reactstrap';
  import yarnstashlogo from "../assets/Yarnstash2.png";
  import '../assets/main.css';
  import { Link } from 'react-router-dom';


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
              <NavbarBrand href="/"><img src={yarnstashlogo} alt='yarnlogo' className="logo-img" /></NavbarBrand>
              <NavbarToggler onClick={this.handleToggle} />
              <Collapse navbar>
                <Nav className="mr-auto dropdown-format" navbar>
                 
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="body-text">
                      My Stash
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link className="btn-drop"  to="/yarnindex" >
                      <DropdownItem className="body-text">
                        Yarn Stash
                      </DropdownItem>
                      </Link>
                      <Link className="btn-drop"  to="/patternindex">
                      <DropdownItem className="body-text" >
                         Pattern Stash 
                      </DropdownItem>
                       </Link>
                      <DropdownItem divider />
                      <Link className="btn-drop" to="/home"> 
                      <DropdownItem className="body-text">
                        Home
                      </DropdownItem> 
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <Link to='/about' className="btn-about"> 
                  <NavItem>
                    <NavLink  className="body-text">About</NavLink>
                  </NavItem>
                  </Link>
                </Nav>
               
                <Button onClick={this.logout} size="lg" className="header-line" color="transparent">Logout</Button>
              </Collapse>
            </Navbar>
          </div>
         );
    }
}
 
export default YarnStashNav;