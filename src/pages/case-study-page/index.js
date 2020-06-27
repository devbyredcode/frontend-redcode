import React, { Component } from 'react';
import HeaderPrimary from '../../components/header-primary';
import NewsCardPrimary from '../../components/news-card-primary';
import FooterSection from '../../section/footer-section';
import CaseStudyPageStyle from './index.style';
import LoadingPrimary from '../../components/loading-primary';
import NoDataPrimary from '../../components/no-data-primary';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios';

class CaseStudyPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive    : 'all',
            isLoading   : true,
            itemFilter  : [
                {category : 'all', label: 'ALL'},
                {category : 'web', label: 'WEB APPS'},
                {category : 'mobile', label: 'MOBILE APPS'}
            ],
            itemData    : []
        }
    }

    getDataWithCategory = async (param) => {
        this.setState({
            ...this.state, isLoading : true, isActive : param
        })
        await axios.get(`/api/v1/case-study/category/${param}`)
                .then(response => {
                    this.setState({
                        ...this.state, itemData: response.data.data.data_case_study, isLoading : false
                    })
                })
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get('/api/v1/case-study')
                .then(response => {
                    this.setState({
                        ...this.state, itemData: response.data.data.data_case_study, isLoading : false
                    })
                })
    }

    componentDidUpdate(prevProps, prevState){

    }

    render(){
        return(
            <CaseStudyPageStyle>
                <HeaderPrimary
                    url="/case-study"
                    title="CASE STUDY"/>
                <Container className="filter-primary-wrapper">
                    <div className="filter-primary-wrapper__item">
                        {this.state.itemFilter.map((item, index) => {
                            return <span className={this.state.isActive == item.category ? 'active' : ""}  
                                        onClick={this.getDataWithCategory.bind(this, item.category)} 
                                        key={index}>{item.label}</span>
                        })}
                    </div>
                </Container>
                { 
                    this.state.isLoading ? 
                    <LoadingPrimary/> :
                    <Container>
                        <Row className="news-wrapper">
                            {
                            this.state.itemData.length < 1 ? 
                            <NoDataPrimary
                                paragraph="Hello, we still making some awesome apps. Stay tuned."/> :
                                this.state.itemData.map((data, index) => {
                                    return  <Col lg="6" md="6" sm="12" xs="12" className="news-wrapper__card" key={index}>
                                                <Link to={`/case-study/${data.slug}`}>
                                                    <NewsCardPrimary
                                                        image={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}
                                                        title={data.title}
                                                        url={`case-study/${data.slug}`}/>
                                                </Link>
                                            </Col>
                            })
                            }
                        </Row>
                    </Container>
                }
                <FooterSection/>
            </CaseStudyPageStyle>
        )
    }
}

export default CaseStudyPage;