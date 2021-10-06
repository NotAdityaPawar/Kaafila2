import { Card,Container } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import KaafilaLogo from "../images/kaafilalogo.png"
import AlgorandLogo from "../images/algorand.png"
export default function Sidebar() {
    return (
        <Container>
            <Image src={KaafilaLogo} />
            <Container><KaafilaCard/></Container>
            <Container >
                <Image src={AlgorandLogo} />
                <p>Kaafila is powered by Algorand</p>
            </Container>
        </Container>
    )
}


function KaafilaCard() {
    return (
        <Card style={{ width: '18rem' }} border={false}>
            <Card.Body>
                <Card.Title>Kaafila (KFL) Token Stats </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Last Updated 2 oct, 2021</Card.Subtitle>
                <Card.Text>
                        Token Started: 11 June 2021
                        Max Total Supply: 100 bn
                        Circulating Supply: 20 bn
                        Frozen Supply: 80 bn
                        Total Users: 6383
                </Card.Text>

            </Card.Body>
        </Card>
    )
}