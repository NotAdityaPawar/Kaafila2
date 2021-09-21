import { Col, Container, Row } from 'react-bootstrap'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMediumSquare, AiFillTwitterSquare, AiFillYoutube, AiOutlineDisconnect} from 'react-icons/ai/'
import {FaDiscord, FaRedditSquare, FaTelegram, FaTelegramPlane} from 'react-icons/fa'

export default function AddressBar() {
    const styless = {
        color:"white",
        backgroundColor:"#031835",
        padding:"20px",
        fontWeight:"600"
    }
    return (
        <Container style={styless} fluid>
            <Row>
                <Col sm={12} lg={3}><Address/></Col>
                <Col sm={12} lg={6}><FindUs/></Col>
                <Col sm={12} lg={3}><Kaafila/></Col>
            </Row>
        </Container>
    )
}

function Address() {
    return (
        <Container padding>
            <h2>Address</h2>
            <p>Wilmington ,Delaware,USA-19891</p>
        </Container>
    )
}
function FindUs() {
    const links = {
        "Twitter": "https://twitter.com/Kaafila2020",
        "Linkedin": "https://www.linkedin.com/company/kaafila2021",
        "Facebook": "https://www.facebook.com/Kaafila-112229374449872",
        "Youtube": "https://youtube.com/c/Kaafila",
        "Discord": "https://discord.gg/z4wpsxYyTU",
        "Telegram": "https://t.me/joinchat/RSRLtQmq0d2eClWg",
        "Reddit": "https://www.reddit.com/r/Kaafila/",
        "Github": "https://github.com/Kaafila2021",
        "Lunarcrush": "https://lunarcrush.com/coins/kfl/kaafila?section=summary",
        "Medium":"https://medium.com/@kaafila",
        "Email" : "info@kaafila.org",
        "Instagram" : "https://www.instagram.com/__kaafila/"
    }
    return (
        <div style={{"textAlign":"center"}}>
            <h2>Find us on</h2>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <AiFillTwitterSquare/>
                            <AiFillLinkedin/>
                            <AiFillFacebook/>
                            <AiFillYoutube/>
                            <FaDiscord/>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <FaTelegramPlane/>
                            <FaRedditSquare/>
                            <AiFillGithub/>
                            <AiFillMediumSquare/>
                            <AiFillMail/>
                            <AiFillInstagram/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
function Kaafila() {
    return (
        <div style={{"textAlignLast":"end"}}>
            <h2>Kaafila</h2>
            <p>Pitchdesk</p>
        </div>
    )
}