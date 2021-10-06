import { Container,Button, Row, Col,Form,Image } from "react-bootstrap"
import {Link} from 'react-router-dom'
import Sidebar from "../components/sidebar"

export default function Partners(){
    const data = {
        p1:`Kaafila is a new video sharing platform, built using blockchain technology. Using this video sharing platform, Kaafila aims to provide useful content and learning resources, along with courses, tests, certifications, and internships, to a wide range of users of different age groups, from school children to working professionals, to help in their careers.`,
        p2:`The focus is on offering a wide range of learning resources either free or at very low cost, so that people across the world can learn and benefit irrespective of their current income level. The focus is also on creating a large network of people worldwide who are constantly learning to progress in their career and life.`,
        p3:`Kaafila’s motto is: “Knowledge for Lifetime”, and the same is reflected in our token name “KFL”. Over next 10-20 years, we believe that Kaafila project will help millions of people in their education and career, through the courses, tests, certificates, internships, and scholarships/awards offered through our platform.`,
        p4:`We are open to all kinds of useful content that can help in the learning and career growth of people in any industry/niche. We see a role for every professional with domain expertise and experiences that can be shared to help others. Not every video has to be a course, and you are welcome to post a series of useful/informative videos in the industry/niche that you are working.`,
        p5:`Please refer Section 9 (Project Goals) of Kaafila whitepaper to learn more about our project goals for 2021 to 2024. We are working to create a wide range of courses that we can offer free to people, along with certifications, and internships where possible.`,
        p6:`Please contact us if you are interested in becoming a partner or content provider. Thanks.`
    }
    return(
        <Container >
            <Row>
                <Col>
                    <h1>Partners</h1>
                    <p>{data.p1}</p>
                    <p>{data.p2}</p>
                    <p>{data.p3}</p>
                    <p>{data.p4}</p>
                    <p>{data.p5}</p>
                    <p>{data.p6}</p>
                </Col>
                <Col sm={12} lg={3}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
    )
}

//component for the full stack and back end
function JoinUs(){
    return(
        <div>
            <Row>
                <Col sm={12 }lg>
                    <h2>Software Engineer(Full stack)</h2>
                    <Button >View Details</Button>
                </Col>
                <Col sm={12} lg>
                    <h2>Software Engineer(Full stack)</h2>
                    <Button>View Details</Button>
                </Col>
            </Row>
        </div>
    )
}


function ContactForm(){
    const styless = {
        container:{
            marginTop:"20px"
        }
    }
    return(
        <div style={styless.container}>
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
            </Row>
        </Container>
        </div>
    )
}