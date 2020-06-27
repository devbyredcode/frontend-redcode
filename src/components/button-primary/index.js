import React, { Component } from 'react';
import ButtonPrimaryStyle from './index.style';

class ButtonPrimary extends Component{
    render(){
        return(
            <ButtonPrimaryStyle className={`btn ${this.props.class}`} onClick={this.props.onClick}>
                {this.props.label}
            </ButtonPrimaryStyle>
        )
    }
}

export default ButtonPrimary;