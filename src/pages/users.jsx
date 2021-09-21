import Image from "../images/form_image.jpg"
import { Container,Button ,Form,Col,Row} from "react-bootstrap";

export default function User(){
    return(
        <Container fluid>
            <h1>User</h1>
            <p>Kaafila is a decentralized media platform that connects viewers directly with the content providers.</p>
            <Button variant="primary">Check out our team</Button>
        </Container>
    )
}

function Banner(){
    return(
        <Container>
            <img src={Image} width="100%" />
        </Container>
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
                <Col><Image></Image></Col>
            </Row>
        </Container>
        </div>
    )
}