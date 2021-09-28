import { Col, Container, Row } from 'react-bootstrap'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMediumSquare, AiFillTwitterSquare, AiFillYoutube, AiOutlineDisconnect} from 'react-icons/ai/'
import {FaDiscord, FaRedditSquare, FaTelegram, FaTelegramPlane} from 'react-icons/fa'

export default function AddressBar() {
    const styless = {
        color:"white",
        backgroundColor:"#40928c",
        padding:"20px",
        fontWeight:"600",
        marginTop:"20px"
    }
    return (
        <Container style={styless} fluid>
            <Row>
                <Col sm={6} lg={6}><Address/></Col>
                <Col sm={6} lg={6}><FindUs/></Col>
            </Row>
        </Container>
    )
}

function Address() {
    return (
        <Container padding>
            <h2>Address</h2>
            <p>London, United Kingdom</p>
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
    const styless = {
        a:{
            "textDecoration" : "None",
            "color":"white",
            "textAlign":"right"
        },
        icon:{
            "height":"4em",
            "width":"4em"
        }
    }
    return (
        <div style={{"textAlign":"right"}}>
            <h2>Find us on</h2>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <a href={links.Twitter} style={styless.a}><AiFillTwitterSquare style={styless.icon}/></a>
                            <a href={links.Linkedin} style={styless.a}>  <AiFillLinkedin style={styless.icon}/></a>
                            <a href={links.Facebook}style={styless.a}> <AiFillFacebook style={styless.icon}/></a>
                            <a href={links.Youtube}style={styless.a}>  <AiFillYoutube style={styless.icon}/></a>
                            <a href={links.Discord}style={styless.a}>  <FaDiscord style={styless.icon}/></a>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <a href={links.Telegram}style={styless.a}> <FaTelegramPlane style={styless.icon}/></a>
                            <a href={links.Reddit}style={styless.a}>  <FaRedditSquare style={styless.icon}/></a>
                            <a href={links.Github}style={styless.a}>   <AiFillGithub style={styless.icon}/></a>
                            <a href={links.Medium}style={styless.a}>   <AiFillMediumSquare style={styless.icon}/></a>
                            <a href={links.Email}style={styless.a}>   <AiFillMail style={styless.icon}/></a>
                            <a href={links.Instagram}style={styless.a}>    <AiFillInstagram style={styless.icon}/></a>
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
        </div>
    )
}