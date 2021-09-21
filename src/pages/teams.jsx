import { Col, Container ,Row,Image,Button,Card} from "react-bootstrap";
import React from 'react'
//import {Card,Card1, getCard} from "../components/card"
import Ethan from "../images/ethan.jpeg"


const PageContentCard = getPageContentCard(Card)


export default function Teams(){
    const ourTeam = "Quafila is a team of entrepreneurs, engineers and experts. Our mission is to uplift new generation content providers."

    const teamData = [
        ["Shankar AVSBS","Founder" , "https://www.linkedin.com/in/avsbs/"],
        ["Ethan William" ,"Founder" , "https://www.linkedin.com/in/ethanwilliam/"],
        ["Marc Vergara" , "Lead Blockchain developer" , "https://www.linkedin.com/in/marc-vergara-b72472144/"],
        ["Dharani S" , "Project Manager" ,"https://www.linkedin.com/in/dharanii/" ],
        ["Madhumitha Shree D" ," UI/UX designer" , "https://www.linkedin.com/in/madhumitha-shree-d-baa7911b0/"],
        ["Adam Natsheh" ,"Lead graphic designer" ,"https://www.linkedin.com/in/zompdesigns"],
        ["somtochukwu ikeonyia" , "backend developer","https://www.linkedin.com/in/somtochukwu-ikeonyia-7a8b25149"],
        ["Maria Cristina","back-end developer",""],
        ["Jack sangster" ,"Blockchain developer",""]
    ]
    return(
        <Container>
            <Row>
                <Col><h2>Our Team</h2></Col>
                <Container>{ourTeam}</Container>
            </Row>
            <Row>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

function OurTeam(){
    return(
        <Container>
            <Row>

            </Row>
        </Container>
    )
}

function getPageContentCard(Card){
    return class extends React.Component{

        showContent = () => {
            if (this.props.imgPos === 'left') {
                return (

                    <Container>
                    <Row style={{alignItems:"center"}}>
                        <Col sm={12} lg style={{alignContent:"center"}}><img src={this.props.image} alt="" /></Col>
                        <Col sm ={12} lg style={{alignContent:"center"}}>
                            <h2>{this.props.title}</h2>
                            {this.props.content}
                        </Col>
                    </Row>
                </Container>

            )
        }

            if (this.props.imgPos === 'right'){
                return (
                    <Container>
                    <Row style={{alignItems:"center"}}>
                        <Col sm ={12} lg style={{alignContent:"center"}}>
                            <h2>{this.props.title}</h2>
                            {this.props.content}
                        </Col>
                        <Col sm={12} lg style={{alignContent:"center"}}><img src={this.props.image} alt="" /></Col>
                    </Row>
                </Container>
                )
            }
    }


        render(){
            return(
                <div>
                    {/* <Card {...this.props}/> this code not working */}
                {this.showContent()}
                </div>
            )
        }
    }
}