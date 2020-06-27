import React, { Component } from 'react';
import LabelPrimaryStyle from './index.style';

class LabelPrimary extends Component {
    render() {
        return (
            <LabelPrimaryStyle>
                <span className="circle"></span>
                {this.props.label}
            </LabelPrimaryStyle>
        )
    }
}

export default LabelPrimary;
