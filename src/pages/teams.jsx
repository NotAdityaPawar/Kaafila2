import { Col, Container ,Row} from "react-bootstrap";
import React from 'react'
import {Card,Card1, getCard} from "../components/card"


const PageContentCard = getPageContentCard(Card)
export default function Teams(){
    return(
        <Container>

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