import Image from "../images/form_image.jpg"
import { Container,Button } from "react-bootstrap";

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