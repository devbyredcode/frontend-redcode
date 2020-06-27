import React, { Component } from 'react';
import HeaderPrimaryStyle from './index.style';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class HeaderPrimary extends Component{
    render(){
        return(
            <HeaderPrimaryStyle>
                <div className="header-wrapper">
                    <Fade down>
                        <Link to={this.props.url}>
                            {this.props.title}
                        </Link>
                    </Fade>
                </div>
            </HeaderPrimaryStyle>
        )
    }
}

export default HeaderPrimary;