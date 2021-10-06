import { Container,Button,Row,Col} from "react-bootstrap"
import Sidebar from "../components/sidebar"

export default function MVP(){
    const styless = {
        button:{
            backgroundColor:"#40928C",
            color:"white"
        }
    }
    return(
        <Container >
            <Row>
                <Col>
                    <div>
                    <h1>Check out our MVP</h1>
                    <Button variant="primary" href="https://kaafila.org/app/" style={styless.button}>Click me!</Button>
                    </div>
                </Col>
                <Col sm={12} lg={3}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
    )
}