import { Container,Button,Row,Col } from "react-bootstrap"
import Sidebar from "../components/sidebar"
import Pdf from "../images/whitepaper.pdf"
export default function Whitepaper(){
    const styless = {
        button:{
            backgroundColor:"#40928c",
            color:"white"
        }
    }
    const data ={
        p1:`Kaafila whitepaper is the most important project document, which describes our vision, goals, tokenomics, and various details of the project. Please download the whitepaper using the link below. Please contact us to learn more about any topic in the whitepaper, or if you are interested to work with our project in someway. Thank you.`
    }
    return(
        <div>
        <Container>
            <Row>
                <Col sm={12} lg={9}>
                    <h1>Whitepaper</h1>
                    <p>{data.p1}</p>
                    <Button variant="primary" href={Pdf} style={styless.button}>Check out our latest whitepaper</Button>
                </Col>
                <Col sm={12} lg={3}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}