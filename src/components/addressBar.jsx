import { Col, Container, Row } from 'react-bootstrap'

export default function AddressBar() {
    const styless = {
        color:"white",
        backgroundColor:"#031835",
        padding:"20px",
        fontWeight:"600"
    }
    return (
        <Container style={styless} fluid>
            <Row>
                <Col sm={12} lg={3}><Address/></Col>
                <Col sm={12} lg={6}><FindUs/></Col>
                <Col sm={12} lg={3}><Kaafila/></Col>
            </Row>
        </Container>
    )
}

function Address() {
    return (
        <Container padding>
            <h2>Address</h2>
            <p>Wilmington ,Delaware,USA-19891</p>
        </Container>
    )
}
function FindUs() {
    return (
        <div>
            <h2>Find us on</h2>
            <Container>
                <Row>
                    <img src=""/>
                </Row>
                <Row></Row>
            </Container>
        </div>
    )
}
function Kaafila() {
    return (
        <div>
            <h2>Kaafila</h2>
            <p>Pitchdesk</p>
        </div>
    )
}