import { Container,Row,Col, Image, Form,Button } from "react-bootstrap";
import SignUpImage from '../images/sign_up.png'

export default function SignUp(){
    return(
        <Container>
            <Row>
                <Col><h2>Sign Up</h2></Col>
            </Row>
            <Row>
                <Col>
                    <Container style={{background:"#031835",color:"white",padding:"20px"}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="last"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Container>
                </Col>
                <Col><Image src={SignUpImage}></Image></Col>
            </Row>
        </Container>
    )
}