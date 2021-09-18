import { Container, Row ,Button,Col} from "react-bootstrap";

export default function Token(){
    const tokenContents = ["Token Name: Kaafila","Token Ticker: KFL","Total Supply: 100 Billion","Token Price: $0.0001","Role Utility Token","Organisation Structure: Decentralized","Consensus Mechanism: Not Mineable","Algorithm: Pure PoS (Algorand Blockchain)"];
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Token Information</h2>
                </Col>
            </Row>
            <Row>
                {tokenContents.map((item,value)=>(
                    <Col sm={12} lg={4}><Button>{item}</Button></Col>
                ))}
                <br/>
            </Row>
        </Container>
    )
}