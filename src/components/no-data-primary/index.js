import React, { Component } from 'react';
import NoDataPrimaryStyle from './index.style';

class NoDataPrimary extends Component {
    render() {
        return (
            <NoDataPrimaryStyle>
                <img src="../../image/logo/logo-no-data.png" className="img-fluid" alt="Sorry no data"></img>
                <p>{this.props.paragraph}</p>
            </NoDataPrimaryStyle>
        )
    }
}

export default NoDataPrimary