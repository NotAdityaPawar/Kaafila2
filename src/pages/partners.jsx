import { Container,Button, Row, Col,Form,Image } from "react-bootstrap"
import {Link} from 'react-router-dom'

export default function Partners(){
    return(
        <Container >
            <h1>Partners</h1>
            <p>Kaafila is a decentralized media platform that connects viewers directly with the content providers.</p>
            <Link to="career"><Button variant="primary" >Check out our team</Button></Link>
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
                    <Button >View Details</Button>
                </Col>
                <Col sm={12} lg>
                    <h2>Software Engineer(Full stack)</h2>
                    <Button>View Details</Button>
                </Col>
            </Row>
            <Row>
                <Col><ContactForm/></Col>
            </Row>
        </div>
    )
}


function ContactForm(){
    return(
        <div>
            <Container>
            <Row>
                <Col>
                    <Container style={{background:"#031835",color:"white",padding:"20px"}}>
                        <h2>Contact Us</h2>
                        <Form>
                        <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
    )
}