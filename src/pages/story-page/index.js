import React, { Component } from 'react';
import HeaderPrimary from '../../components/header-primary';
import NewsCardPrimary from '../../components/news-card-primary';
import FooterSection from '../../section/footer-section';
import Skeleton from 'react-loading-skeleton';
import NoDataPrimary from '../../components/no-data-primary';
import StoryPageStyle from './index.style';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios';

class StoryPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive    : 'all',
            isLoading   : true,
            itemFilter  : [
                {category : 'all', label: 'ALL'},
                {category : 'story', label: 'STORY'},
                {category : 'technology', label: 'TECHNOLOGY'}
            ],
            itemData    : []
        }
    }

    getDataWithCategory = async (param) => {
        this.setState({
            ...this.state, isLoading : true, isActive : param
        })
        await axios.get(`/api/v1/story/category/${param}`)
                .then(response => {
                    this.setState({
                        ...this.state, itemData: response.data.data.data_story, isLoading : false
                    })
                })
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get('/api/v1/story')
                .then(response => {
                    console.log(response);
                    this.setState({
                        ...this.state, itemData: response.data.data.data_story, isLoading : false
                    })
                })
    }

    render(){
        return(
            <StoryPageStyle>
                <HeaderPrimary
                    url="/story"
                    title="STORY"/>
                <Container className="filter-primary-wrapper">
                    <div className="filter-primary-wrapper__item">
                        {this.state.itemFilter.map((item, index) => {
                            return <span className={this.state.isActive === item.category ? 'active' : ""}  
                                        onClick={this.getDataWithCategory.bind(this, item.category)} 
                                        key={index}>{item.label}</span>
                        })}
                    </div>
                </Container>
                { 
                    this.state.isLoading ? 
                    <Skeleton width={window.innerWidth > 768 ? 330 : 300} height={400} count={3} style={{margin: "0px 20px 20px"}}/> :
                    <Container>
                        <Row className="news-wrapper">
                            {
                            this.state.itemData.length < 1 ? 
                            <NoDataPrimary
                                paragraph="Hello, we still making some awesome story. Stay tuned."/> :
                                this.state.itemData.map((data, index) => {
                                    return  <Col lg="4" md="4" sm="12" xs="12" className="news-wrapper__card" key={index}>
                                                <Link to={`/story/${data.slug}`}>
                                                    <NewsCardPrimary
                                                        image={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}
                                                        title={data.title}
                                                        url={`story/${data.slug}`}/>
                                                </Link>
                                            </Col>
                                })
                            }
                        </Row>
                    </Container>
                }
                <FooterSection/>
            </StoryPageStyle>
        )
    }
}

export default StoryPage;