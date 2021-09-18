import { Container,Button, Row, Col } from "react-bootstrap"

export default function Partners(){
    return(
        <Container fluid>
            <h1>Partners</h1>
            <p>Kaafila is a decentralized media platform that connects viewers directly with the content providers.</p>
            <Button variant="primary">Check out our team</Button>
            <JoinUs/>
        </Container>
    )
}

//component for the full stack and back end
function JoinUs(){
    return(
        <div>
            <Row>
                <Col sm={12 }lg>
                    <h2>Software Engineer(Full stack)</h2>
                    <Button>View Details</Button>
                </Col>
                <Col sm={12} lg>
                    <h2>Software Engineer(Full stack)</h2>
                    <Button>View Details</Button>
                </Col>
            </Row>
        </div>
    )
}