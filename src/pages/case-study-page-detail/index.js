import React, { Component } from 'react'
import FooterSection from '../../section/footer-section';
import Skeleton from 'react-loading-skeleton';
import CaseStudyPageDetailStyle from './index.style.js';
import axios from '../../axios';
import { Link } from 'react-router-dom';

class CaseStudyPageDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            itemData : []
        }
        
    }
        
    componentDidMount(){
        window.scrollTo(0, 0);
        const { slug } = this.props.match.params
        
        axios.get(`/api/v1/case-study/${slug}`)
                .then(response => {
                    this.setState({...this.state, itemData: response.data.data.data_case_study, isLoading: false});
                });
    }

    render() {
        return (
            <React.Fragment>
                <CaseStudyPageDetailStyle>
                    <div className="case-study-page">
                        <div className="container-fluid case-study-page__title">
                            <div className="layer"></div>
                            <div className="action">
                                <Link to="/case-study">
                                    BACK
                                </Link>
                            </div>
                            <img src={`https://res.cloudinary.com/devbyredcode/image/upload/${this.state.itemData.image}`} className="img-fluid"/>
                            <div className="case-study-page__title__content">
                                <span>{this.state.itemData.category}</span>
                                <h1>{this.state.itemData.title || <Skeleton/>}</h1>
                                <div className="devider red"></div>
                                <span>{this.state.itemData.client}</span>
                            </div>
                        </div>
                        <div className="container case-study-page__description">
                            <div className="case-study-page__description__detail">
                                <h2>CLIENT PROBLEM</h2>
                                <p className="case-study-page__client-problem" dangerouslySetInnerHTML={{__html: this.state.itemData.client_problem}}/>
                            </div>
                            <div className="case-study-page__description__detail">
                                <h2>CLIENT BRIEF</h2>
                                <p className="case-study-page__client-problem" dangerouslySetInnerHTML={{__html: this.state.itemData.client_brief}}/>
                            </div>
                            <div className="case-study-page__description__detail">
                                <h2>OUR SOLUTION</h2>
                                <p className="case-study-page__client-problem" dangerouslySetInnerHTML={{__html: this.state.itemData.our_solution}}/>
                            </div>
                            <div className="case-study-page__description__detail">
                                <h2>OUR RESULT</h2>
                                <p className="case-study-page__client-problem" dangerouslySetInnerHTML={{__html: this.state.itemData.our_result}}/>
                            </div>
                        </div>
                    </div>
                </CaseStudyPageDetailStyle>
                <FooterSection/>
            </React.Fragment>
        )
    }
}

export default CaseStudyPageDetail;
