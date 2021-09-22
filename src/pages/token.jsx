import { Container, Row ,Button,Col} from "react-bootstrap";

export default function Token(){
    const tokenContents = ["Token Name: Kaafila","Token Ticker: KFL","Total Supply: 100 Billion","Token Price: $0.0001","Role Utility Token","Organisation Structure: Decentralized","Consensus Mechanism: Not Mineable","Algorithm: Pure PoS (Algorand Blockchain)"];
    const styless = {
        button :{
            width:"50%",
            backgroundColor:"#031835",
            textAlign:"center",
            "&:hover": {
                backgroundColor: "#efefef",
                color:"#21211"
            }
        },
        buttonContainer:{
            padding:"5px"
        },
        header:{
            textAlign:"center"
        }
    }
    return(
        <Container>
            <Row>
                <Col>
                    <h2 style={styless.header}>Token Information</h2>
                </Col>
            </Row>
            <Row>
                <Col style={styless.header}>
                    {tokenContents.map((items,index)=>
                        <div style={styless.buttonContainer}><Button style={styless.button} sm={12}>{items}</Button></div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}