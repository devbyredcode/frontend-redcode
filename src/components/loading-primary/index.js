import React, { Component } from 'react';
import LoadingPrimaryStyle from './index.style.js';

class LoadingPrimary extends Component{
    render(){
        return(
            <LoadingPrimaryStyle>
                <img src="../../image/icon/loading.svg" alt="Loading..."></img>
            </LoadingPrimaryStyle>
        )
    }
}

export default LoadingPrimary;