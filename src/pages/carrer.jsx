import { Col, Container ,Image,Row,Button,Form} from "react-bootstrap";

export default function Carrer(){
    const data = {
        para1: `Kaafila is a new video sharing platform, built using blockchain technology. Using this video sharing platform, Kaafila aims to provide useful content and learning resources, along with tests, certifications, and internships wherever possible, to a wide range of users of different age groups, from school children to working professionals, to help in their careers. The focus is on creating a large network of people worldwide who are constantly learning to progress in their career and life. The focus is also on offering wide range of learning resources either free or at very low cost, so that people across the world can learn and benefit irrespective of their current income level.`,
        para2: 'Kaafila’s motto is: "Knowledge for Lifetime", and the same is reflected in our token name "KFL". Over time, we believe that Kaafila will help millions of people in their education and career, through the courses, certificates, and internships offered through our platform.',
        para3: `We also want to support and promote a wide range of creative people involved in music, arts, sports, etc.`,
        para4: `Kaafila project team will require multiple roles and team effort to achieve the goals stated in Section 9 of our whitepaper, and to create an organization that is able to grow and deliver high quality content, and learning resources to millions of people worldwide, either free or at very low cost, over the next 20 years.`,
        para5: {
            title : "Kaafila project team has four key groups:",
            p1: "Engineering",
            p2: "Operations",
            p3: "Business Development",
            p4: "Trust & Safety"
        },
        para6: `Please see Section 15 (Kaafila Team Roles & Responsibilities) of our whitepaper to learn more. We have about 50 roles across these four groups , which will be filled ongoing basis along with the project growth.`
    }
    const styless = {
        container:{
            "padding":"10px"
        }
    }
    return(
        <Container style={styless.container}>
            <Container style={styless.container}>{data.para1}</Container>
            <Container style={styless.container}>{data.para2}</Container>
            <Container style={styless.container} >{data.para3}</Container>
            <Container style={styless.container}>{data.para4}</Container>
            <Container style={styless.container}>{data.para5.p1}</Container>
            <Container style={styless.container}>{data.para6}</Container>
        </Container>
    )
}


function CareerContact(){
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
                            <Form.Group className="mb-3" controlId="formGroupUrl">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control type="url" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupInterest">
                                <Form.Label>Area of Interest</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
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