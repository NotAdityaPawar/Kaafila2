import {Link} from 'react-router-dom';

import { Navbar, Container ,Nav} from "react-bootstrap"
import KaafilaLogo from "../images/kaafilalogo.png"
export default function NavbarCustom() {
    const navbarContents = ["/", "Team", "Token", "Carrer", "Whitepaper", "Investor", "Partners", "Users", "MVP"];
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={KaafilaLogo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navbarContents.map((item,values)=>(
                                <Nav.Link>
                                    <Link to={item}>{item}</Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}