import { Container,Button } from "react-bootstrap"
import Pdf from "../images/whitepaper.pdf"
export default function Whitepaper(){
    const styless = {
        button:{
            backgroundColor:"#031835",
            color:"white"
        }
    }
    return(
        <Container >
            <h1>Whitepaper</h1>
            <p>Kaafila is a decentralized media platform that connects viewers directly with the content providers.</p>
            <Button variant="primary" href={Pdf} style={styless.button}>Check out our latest whitepaper</Button>
        </Container>
    )
}