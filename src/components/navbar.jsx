import {Link} from 'react-router-dom';

import { Navbar, Container ,Nav} from "react-bootstrap"
import KaafilaLogo from "../images/kaafilalogo.png"
export default function NavbarCustom() {
    const styless = {
        link:{
            "textDecoration":"none",
            "color":"#031835",
            fontSize:"larger"
        },
        navbar:{
            "marginBottom":"20px"
        }
    }
    const navbarContents = ["Home", "Team", "Token", "Career", "Whitepaper", "Investor", "Users","Contact", "MVP"];
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={styless.navbar}>
                <Container>
                    <Navbar.Brand>
                        <Link to = "/home">
                        <img
                        src={KaafilaLogo}
                        width="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navbarContents.map((item,values)=>(
                                <Nav.Link>
                                    <Link to={item} style={styless.link}>{item}</Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}