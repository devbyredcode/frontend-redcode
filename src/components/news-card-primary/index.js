import React, { Component } from 'react';
import NewsCardPrimaryStyle from './index.style';
import ButtonPrimary from '../button-primary';
import { Link } from 'react-router-dom';

class NewsCardPrimary extends Component{
    render(){
        return(
            <NewsCardPrimaryStyle>
                <div className="card-primary__layer">
                    {
                    this.props.type === 'url' ?
                        <a href={this.props.url} target="_blank" rel="noopener noreferer">
                            <ButtonPrimary
                                label="OPEN IT"
                                class="btn--theme-red"/>
                        </a> :
                        <Link to={this.props.url}>
                            <ButtonPrimary
                                label="READ MORE"
                                class="btn--theme-red"/>
                        </Link>
                    }
                </div>
                <div className="card-primary__image">
                    <img src={this.props.image} className="img-fluid" alt=""/>
                </div>
                <div className="card-primary__detail">
                    <div className="card-primary__detail__title">
                        <h3 className="text--step-down-5">{this.props.title}</h3>
                    </div>
                </div>
            </NewsCardPrimaryStyle>
        )
    }
}

export default NewsCardPrimary;