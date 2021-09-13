import { Container, Row ,Button,Col} from "react-bootstrap";

export default function Token(){
    return(
        <Container style={{padding:"40px"}}>
            <Container>
                <Row>
                    <h2><Col sm={12}lg>Token Information</Col></h2>
                </Row>
                <Row style={{paddingTop:"10px"}}>
                    <Col lg={4} sm={12} mt={5}><Button>Token Name: Kaafila</Button></Col>
                    <Col lg={4} sm={12} mt={5}><Button>Token Ticker: KFL</Button></Col>
                    <Col lg={4} sm={12} mt={5}><Button>Total Supply: 100 Billion</Button></Col>
                    <Col lg={4} sm={12} mt={5}><Button>Token Price: $0.0001</Button></Col>
                    <Col lg={4} sm={12} mt={5}><Button>Role Utility Token</Button></Col>
                    <Col lg={4} sm={12} mt={5}><Button>Organisation Structure: Decentralized</Button></Col>
                    <Col lg={6} sm={12} mt-5><Button>Consensus Mechanism: Not Mineable</Button></Col>
                    <Col lg={6} sm={12} mt-5><Button>Algorithm: Pure PoS (Algorand Blockchain)</Button></Col>
                </Row>
            </Container>
        </Container>
    )
}