import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import BreadcrumbsPrimaryStyle from './index.style';

class BreadcrumbsPrimary extends Component{
    render(){
        return(
            <BreadcrumbsPrimaryStyle>
               <Link to="/">home</Link> <span className="devider">/</span> <Link to={this.props.root}>{this.props.root_name}</Link> <span className="devider">/</span> <span className="title">{this.props.title}</span>
            </BreadcrumbsPrimaryStyle>
        )
    }
}

export default BreadcrumbsPrimary;