import {Link} from 'react-router-dom';

import { Navbar, Container ,Nav} from "react-bootstrap"
import KaafilaLogo from "../images/kaafilalogo.png"
export default function NavbarCustom() {
    const styless = {
        link:{
            "textDecoration":"none",
            "color":"white",
            fontSize:"larger"
        },
        navbar:{
            "marginBottom":"20px",
            "backgroundColor":"#40928c"
        },
        brand:{
            "textDecoration":"none",
            "color":"white",
            fontSize:"35px"
        },
        brandSubtitle:{
            "textDecoration":"none",
            "color":"white",
            fontSize:"15px",
            paddingRight:"50px"
        }
    }
    const navbarContents = ["Home", "About", "Whitepaper", "Token", "Team", "Partners", "Careers","Contact", "MVP"];
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={styless.navbar}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/home"style={styless.brand}>Kaafila.org</Link>
                        <p style={styless.brandSubtitle}>Decentralized Media & Education Platform</p>
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