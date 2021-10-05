import {Container,Row,Col,Form,Button} from "react-bootstrap"
export default function ContactForm(){
    const data = {
        p1:`Thanks for your interest in Kaafila project. Do you have a question or comment for us? Do you want to become a Content provider on our platform? Or do you want to use one of our courses or services? Or do you want to join our team? Whatever the case, we will be happy to hear from you.`,
        p2:`You can connect with us on social media using the links below.`,
        links:{
            twitter:"https://twitter.com/Kaafila2020",
            linkedin:"https://www.linkedin.com/company/kaafila2021",
            Facebook: "https://www.facebook.com/Kaafila-112229374449872",
            YouTube: "https://youtube.com/c/Kaafila",
            Discord: "https://discord.gg/z4wpsxYyTU",
            Telegram: "https://t.me/joinchat/RSRLtQmq0d2eClWg",
            Reddit: "https://www.reddit.com/r/Kaafila/",
            Github: "https://github.com/Kaafila2021",
            Lunarcrush: "https://lunarcrush.com/coins/kfl/kaafila",
            Medium: "https://medium.com/@kaafila",
            Instagram : "https://www.instagram.com/__kaafila/",
            Email: "info@kaafila.org"
        }

    }
    const styless = {
        container:{
            marginTop:"20px"
        }
    }
    return(
        <div style={styless.container}>
            <Container>
                <h2>Contact</h2>
                <p>{data.p1}</p>
                <p>{data.p2}</p>
                <p>
                    <div>Twitter: <a href={data.links.twitter}>{data.links.twitter}</a></div>
                    <div>LinkedIn: <a href={data.links.linkedin}>{data.links.linkedin}</a></div>
                    <div>Facebook: <a href={data.links.Facebook}>{data.links.Facebook}</a></div>
                    <div>YouTube: <a href={data.links.YouTube}>{data.links.YouTube}</a></div>
                    <div>Discord: <a href={data.links.Discord}>{data.links.Discord}</a></div>
                    <div>Telegram: <a href={data.links.Telegram}>{data.links.Telegram}</a></div>
                    <div>Reddit: <a href={data.links.Reddit}>{data.links.Reddit}</a></div>
                    <div>GitHub: <a href={data.links.Github}>{data.links.Github}</a></div>
                    <div>Lunarcrush: <a href={data.links.Lunarcrush}>{data.links.Lunarcrush}</a></div>
                    <div>Medium: <a href={data.links.Medium}>{data.links.Medium}</a></div>
                    <div>Instagram: <a href={data.links.Instagram}>{data.links.Instagram}</a></div>
                    <div>Email: <a href={data.links.Email}>{data.links.Email}</a></div>
                </p>
            <Row>
                <Col>
                    <Container style={{background:"#40928c",color:"white",padding:"20px"}}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
    )
}