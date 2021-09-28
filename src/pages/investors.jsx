import { Container,Image,Form ,Col,Row,Button} from "react-bootstrap"
import Chart1 from '../images/TokenDistributionChart.png'
import Chart2 from '../images/TokenUsageChart.png'

export default function Investors(){
    const styless = {
        Chart:{
            textAlign:"center"
        }
    }

    const data = {
        para1 : `Kaafila is a new video sharing platform, built using blockchain technology. Using this video sharing platform, Kaafila aims to provide useful content and learning resources, along with tests, certifications, and internships wherever possible, to a wide range of users of different age groups, from school children to working professionals, to help in their careers. The focus is on creating a large network of people worldwide who are constantly learning to progress in their career and life. The focus is also on offering wide range of learning resources either free or at very low cost, so that people across the world can learn and benefit irrespective of their current income level.`,
        para2 : `Kaafila’s motto is: "Knowledge for Lifetime", and the same is reflected in our token name "KFL". Over time, we believe that Kaafila will help millions of people in their education and career, through the courses, certificates, and internships offered through our platform.`,
        para3 : `The KFL token has predefined maximum supply of 100 billion tokens, and the tokens will be released ongoing basis every year over next 20 years, based on the combined efforts of the Kaafila project Team and Users. Please refer Section 13 (Tokenomics) of Kaafila whitepaper for more details.`,
        para4 : `Investors can buy KFL token directly from exchanges/swap sites once it is listed on them. We are currently working to list KFL token on two such sites, and about 3-5% of total KFL tokens maybe put up for sale at the base price of $0.0001 and no further token sale is planned in the near future, because our team members and partners are willing to work directly with payments in KFL token, without the need for USD.`,
        bannerContent: `Disclaimer: Kaafila (KFL) token is a utility token meant for the working of Kaafila project. The KFL token does not represent any asset or security, and there are no guarantees of any type regarding the token price appreciation over any timeframe.`,
        bannerContent2: `Please use the contact form below if you are interested to receive updates on KFL token. Thanks.`
    }
    return(
        <Container>
            <Container>
                <h2>Investors</h2>
                <p>{data.para1}</p>
            </Container>
            <Container style={styless.Chart}><Image src={Chart1} /></Container>
            <Container>{data.para2}</Container>
            <Container>{data.para3}</Container>
            <Container style={styless.Chart}><Image src={Chart2} /></Container>
            <Container>{data.para4}</Container>
        </Container>
    )
}

function ContactForm(){
    return(
        <div>
            <Container>
            <Row>
                <Col>
                    <Container style={{background:"#40928c",color:"white",padding:"20px"}}>
                        <h2>Contact Us</h2>
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
                <Col><Image></Image></Col>
            </Row>
        </Container>
        </div>
    )
}