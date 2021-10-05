import { Container,Button} from "react-bootstrap"

export default function MVP(){
    const styless = {
        button:{
            backgroundColor:"#40928C",
            color:"white"
        }
    }
    return(
        <Container >
            <div>
            <h1>Check out our MVP</h1>
            <Button variant="primary" href="https://kaafila.org/app/" style={styless.button}>Click me!</Button>
            </div>
        </Container>
    )
}