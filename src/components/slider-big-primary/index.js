import React, { Component } from 'react';
import SliderBigPrimaryStyle from './index.style';
import ButtonPrimary from '../button-primary';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

class SliderBigPrimary extends Component{
    render(){
        return(
        <SliderBigPrimaryStyle>
            <div className="overlay">
                <div className="overlay__text">
                    <h3 className="text--step-down-1">{this.props.title}</h3>
                    <p className="text--step-down-5">{this.props.detail}</p>
                    <Link to={`/case-study/${this.props.slug}`}>
                    <ButtonPrimary 
                            label="SEE HOW IT MADE" 
                            class="btn--theme-red btn--sm"/>
                    </Link>
                </div>
            </div>
            {this.props.thumbnail ? 
            <img src={this.props.thumbnail} className="img-fluid" alt=""/> : <Skeleton/> }
        </SliderBigPrimaryStyle>
        )
    }
}

export default SliderBigPrimary;