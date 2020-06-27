import React, { Component } from 'react';
import CardServicesStyle from './index.style';
import Fade from 'react-reveal/Fade';
                            
class CardServices extends Component{
    render(){
        return(
            <Fade bottom cascade>
                <CardServicesStyle>
                    <div className="icon">
                        <img src={`./../../image/icon/${this.props.image}`} alt=""/>
                    </div>
                    <p className="text--step-down-2">{this.props.title}</p>
                </CardServicesStyle>
            </Fade>
        )
    }
}
            
export default CardServices;