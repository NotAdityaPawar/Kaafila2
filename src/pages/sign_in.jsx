import {Container ,Col, Row,Form,Button ,Image} from 'react-bootstrap'
import SignInImage from '../images/sign_in.png'
export default function SignIn(){
    return(
        <Container>
            <Row>
                <Col><h2>Sign In</h2></Col>
            </Row>
            <Row>
                <Col>
                    <Container style={{background:"#031835",color:"white",padding:"20px"}}>
                        <h2>Welcome</h2>
                        <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="email"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Container>
                </Col>
                <Col><Image src={SignInImage}></Image></Col>
            </Row>
        </Container>
    )
}