import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import React from 'react'
import { useState } from "react";
//import {Card,Card1, getCard} from "../components/card"
import Ethan from "../images/ethan.jpeg";
import Shankar from "../images/shankar.jpeg"
import Marc from '../images/marc.jpeg'
import Dharani from '../images/dharani.jpeg'
import Madhumita from "../images/madhumita.jpeg"
import Adam from "../images/adam.jpeg"
import Somtochukwu from "../images/Somtochukwu.jpg"
import Maria from "../images/maria.jpeg"
import Jack from "../images/avatar.jpeg"



const PageContentCard = getPageContentCard(Card)


export default function Teams() {
    const ourTeam = "Quafila is a team of entrepreneurs, engineers and experts. Our mission is to uplift new generation content providers."

    const avatarStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "50%",

    }
    const teamData = [
        ["Shankar AVSBS", "Founder", "https://www.linkedin.com/in/avsbs/"],
        ["Ethan William", "Founder", "https://www.linkedin.com/in/ethanwilliam/"],
        ["Marc Vergara", "Lead Blockchain developer", "https://www.linkedin.com/in/marc-vergara-b72472144/"],
        ["Dharani S", "Project Manager", "https://www.linkedin.com/in/dharanii/"],
        ["Madhumitha Shree D", " UI/UX designer", "https://www.linkedin.com/in/madhumitha-shree-d-baa7911b0/"],
        ["Adam Natsheh", "Lead graphic designer", "https://www.linkedin.com/in/zompdesigns"],
        ["somtochukwu ikeonyia", "backend developer", "https://www.linkedin.com/in/somtochukwu-ikeonyia-7a8b25149"],
        ["Maria Cristina", "back-end developer", ""],
        ["Jack sangster", "Blockchain developer", ""]
    ]
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Our Team</h2>
                </Col>
            </Row>
            <Row>
                <Col><a href={teamData[0][2]}><Image style={avatarStyle} src={Shankar}/></a></Col>
                <Col><a href={teamData[1][2]}><Image style={avatarStyle} src={Ethan}/></a></Col>
                <Col><a href={teamData[2][2]}><Image style={avatarStyle} src={Marc}/></a></Col>
                <Col><a href={teamData[3][2]}><Image style={avatarStyle} src={Dharani}/></a></Col>
                <Col><a href={teamData[4][2]}><Image style={avatarStyle} src={Madhumita}/></a></Col>
                <Col><a href={teamData[5][2]}><Image style={avatarStyle} src={Adam}/></a></Col>
                <Col><a href={teamData[6][2]}><Image style={avatarStyle} src={Somtochukwu}/></a></Col>
                <Col><a href={teamData[7][2]}><Image style={avatarStyle} src={Maria}/></a></Col>
                <Col><a href={teamData[8][2]}><Image style={avatarStyle} src={Jack}/></a></Col>
            </Row>
        </Container>
    )
}


function JoinOurTeam(){
    const data = "Enjoy solving complicated problems ? Join our team because we solve a lot of problems that cannot be easily solved.";
    return(
        <Container>
            <h2>Join Our Team</h2>
        </Container>
    )
}

function getPageContentCard(Card) {
    return class extends React.Component {

        showContent = () => {
            if (this.props.imgPos === 'left') {
                return (

                    <Container>
                        <Row style={{ alignItems: "center" }}>
                            <Col sm={12} lg style={{ alignContent: "center" }}><img src={this.props.image} alt="" /></Col>
                            <Col sm={12} lg style={{ alignContent: "center" }}>
                                <h2>{this.props.title}</h2>
                                {this.props.content}
                            </Col>
                        </Row>
                    </Container>

                )
            }

            if (this.props.imgPos === 'right') {
                return (
                    <Container>
                        <Row style={{ alignItems: "center" }}>
                            <Col sm={12} lg style={{ alignContent: "center" }}>
                                <h2>{this.props.title}</h2>
                                {this.props.content}
                            </Col>
                            <Col sm={12} lg style={{ alignContent: "center" }}><img src={this.props.image} alt="" /></Col>
                        </Row>
                    </Container>
                )
            }
        }


        render() {
            return (
                <div>
                    {/* <Card {...this.props}/> this code not working */}
                    {this.showContent()}
                </div>
            )
        }
    }
}