import React from 'react';
//import Button from 'react-bootstrap';

class Button1 extends React.Component{

}

// Need to write it down further
function getButton(Component){
    return class extends React.Component{

        changeBG = () => {

            this.setState(this.backgroundColor='yellow')
        }

        render(){
            return(
                <Component
                onMouseEnter={(e) => this.changeBG()}
                  onMouseLeave={(e) => {this.backgroundColor="yellow"; }} {...this.props}
                >{this.props.content}</Component>
            )
        }
    }
}

export {getButton}