import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'

function Card(props){
    const {title,ImageSRC,content}= props;
    return(
        <Container>
            <Row style={{alignItems:"center"}}>
                <Col sm={12} lg style={{alignContent:"center"}}><img src={ImageSRC} alt="" /></Col>
                <Col sm ={12} lg style={{alignContent:"center"}}>
                    <h2>{title}</h2>
                    {content}
                </Col>
            </Row>
        </Container>
    )
}

//Currently Using it as the template card and making use of inheritance to extend the cards in other classes.
//Need to replace the inheritance with the HOC in future HOC class has been designed below for reference but not making
//changes onto the input class to the HOC need to check it.

//Here need to replace this card with the meta class for the card which defines what kind of props it should be taking.
class Card1 extends React.Component{
    //For this funcion only props and the functions are going to be important
    //showcontent and render we are overridding from the HOC.
    //not going to use the current render function and child object will not be calling the render if this component.
    //rather it will call the render of the HOC.
    constructor(props){
        super(props);
    }

   title = () => {
       return (
        this.props.title
       );
   }

   content = () =>{
        return(
            this.props.content
        )
   }

   image = () => {
       return(
           this.props.image
       )
    }

    showcontent = () =>{
        return ( <div>
            {this.title()}
            {this.content()}
            {this.image()}
        </div>)
    }

    //Render not important here as clarified above.
    render(){
        return (
          <React.Fragment>
              {this.showcontent()}

          </React.Fragment>
        );
    }
}
// Need to check how to get it work with the conecpt of HOC for converting a basic card to designed card
//Now working for HOC but parameter passing not working due to which orginal component passed to the HOC not getting
//rendered.
//Here showcontent not getting dynamically replaced need to check and get it done so can become HOC for all the cards
function getCard(Card,functions,Data){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.title = functions;
        }
        showContent = () => {
            return ( <div>
                {this.props.content}
                {this.props.content}
                {this.props.content}
            </div>)
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
export  {Card, Card1, getCard}