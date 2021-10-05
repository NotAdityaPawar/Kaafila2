import { Container ,Row,Col, Button} from "react-bootstrap"
import HomeImage from '../images/home.png'
import About from "../images/about.png"
import Technology from "../images/technology.png"
import {Card,Card1, getCard} from "../components/card"
import React from 'react';
import { getButton } from "../components/button";


const data =[
    {
        'title':'A Decentralized Media Platform',
        'content':'Help content providers generate the revenue they deserve.',
        'imageSRC':HomeImage,
        'otherInfo':[{'button':{'signin':'link1','signup':'link2'}}],
    },
    {
        "title":"About Kaafila",
        "content":`Kaafila is a new video sharing platform, built using blockchain technology. Using this video sharing platform, Kaafila aims to provide useful content and learning resources, along with exams and certifications wherever possible, to a wide range of users of different age groups. The focus is on creating a large network of people worldwide who are constantly learning to progress in their career and life. The focus is also on offering the various learning resources either free or at very low cost, so that people across the world can learn and benefit irrespective of their current income level.`,
        "imageSRC": About
    },
    {
        "title":"Technology",
        "content":`Technologically, the Proof-of-Work blockchain is not suitable for handling transactional systems (high frequency and volume of data). Kaafila has tested the blockchain-only solution and found it to be too costly, too slow, and to have a lack of privacy in storing decryption keys – and that is why we use a hybrid stack: the smart contract on Blockchain, payments, and governance; and the already established SQL database with a Node.js application server providing the API for transactional operations between the players and the core platform. We observe the growth of side-chain systems technology and look forward to its readiness for business.`,
        "imageSRC":Technology
    },
    {
        "title":"Contact",
        "otherInfo":[{'button':{'signin':'link1','signup':'link2'}}]
    }
]

const PageContentCard = getPageContentCard(Card)
const ContactCard = getContactCard(Card)
const CustomButton = getButton(Button)
export default function Home(){

    return(
        <Container>
            {/* <Card ImageSRC={data[0].imageSRC} title={data[0].title} content={data[0].content} />
            <Card ImageSRC={data[1].imageSRC} title={data[1].title} content={data[1].content} />

            <ContactComponent/>
            <Card1 title={<Container>This is title</Container>} image="This is image section" content="This is content section"
            />
            <Card2 title={<Container>This is title</Container>} image="This is image section" content="This is content section"
            imgPos="left"/>
            <ContentCard title={<Container>This is title</Container>} image="This is image section" content="This is content section"
            />  */}

            <PageContentCard
                title={<div style={{color:'#40928c'}}>{data[0].title}</div>}
                image={data[0].imageSRC} imgPos="right"
                content={data[0].content}
            />

            <PageContentCard
                title={<div style={{color:'#40928c'}}>{data[1].title}</div>}
                image={data[1].imageSRC}
                content={data[1].content}
                imgPos="right"
            />

            <PageContentCard title={<div style={{color:'#40928c'}}>{data[2].title}</div>}
                image={data[2].imageSRC} content={data[2].content} imgPos="left"
            />

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
                        <Col sm={12} lg style={{alignContent:"center"}}><img src={this.props.image} style={{maxWidth:"100%"}}
                        alt="" /></Col>
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
                        <Col sm={12} lg style={{alignContent:"center"}}><img src={this.props.image}
                        style={{maxWidth:"100%"}} alt="" /></Col>
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


function getContactCard(Card){
    return class extends React.Component{

        showContent = () => {
            return (
                <Container>
                <Row style={{alignItems:"center", textAlign:"center"}}>
                    <Col sm ={12} lg ={12} style={{alignContent:"center"}}>
                        <h2>{this.props.title}</h2>

                    </Col>
                    <Col sm={12} lg={12} style={{alignContent:"center"}}>
                        {this.props.imageGrid}
                    </Col>
                </Row>
            </Container>
            )
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


