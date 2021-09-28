import {Container,Row,Col,Form,Button} from "react-bootstrap"
export default function ContactForm(){
    const styless = {
        container:{
            marginTop:"20px"
        }
    }
    return(
        <div style={styless.container}>
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