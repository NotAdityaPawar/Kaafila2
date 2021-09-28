import Image from "../images/form_image.jpg"
import { Container,Button ,Form,Col,Row} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function User(){
    return(
        <Container>
            <Container style={{textAlign:"center"}}>
                <h1 style={{color:"#40928c"}}>User</h1>
                <p>Kaafila is a decentralized media platform that connects viewers directly with the content providers.</p>
                <Link to= "team"><Button variant="primary" style={{background:"#40928c"}}>Check out our team</Button></Link>
            </Container>

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
                    <Container style={{background:"#40928c",color:"white",padding:"20px"}}>
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
                            <Form.Group className="mb-3" controlId="formGroupUrl">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control type="url" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupInterest">
                                <Form.Label>Area of Interest</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
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