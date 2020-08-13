import React, { Component } from 'react';
import HeaderPrimary from '../../components/header-primary'
import NewsCardPrimary from '../../components/news-card-primary';
import FooterSection from '../../section/footer-section';
import Skeleton from 'react-loading-skeleton';
import NoDataPrimary from '../../components/no-data-primary';
import PlayGroundPageStyle from './index.style';
import { Container, Row, Col } from 'reactstrap';
import axios from '../../axios';

class PlayGroundPage extends Component{
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
            items         : []
        }
    }

    getDataWithCategory = async (param) => {
        this.setState({
            ...this.state, isLoading : true, isActive : param
        })
        await axios.get(`/api/v1/playground/category/${param}`)
                .then(response => {
                    this.setState({
                        ...this.state, items: response.data.data.data_playground, isLoading : false
                    });
                })
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get('/api/v1/playground')
                .then(response => {
                    this.setState({
                        ...this.state, items: response.data.data.data_playground, isLoading : false
                    });
                })
    }

    render(){
        return(
            <PlayGroundPageStyle>
                <HeaderPrimary
                    url="/playground"
                    title="PLAYGROUND"/>
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
                    <Skeleton width={window.innerWidth > 768 ? 330 : 300} height={window.innerWidth > 768 ? 400 : 300} count={1} style={{margin: "0px 20px 20px"}}/> :
                    <Container>
                        <Row className="news-wrapper">
                            {
                            this.state.items.length < 1 ? 
                            <NoDataPrimary
                                paragraph="Hello, we still making some awesome experiment. Stay tuned."/> :
                                this.state.items.map((data, index) => {
                                    return  <Col lg="4" md="4" sm="12" xs="12" className="news-wrapper__card" key={index}>
                                                <a href={data.link} target="_blank" rel="noopener noreferer">
                                                    <NewsCardPrimary
                                                        image={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}
                                                        title={data.title}
                                                        type="url"
                                                        url={data.link}/>
                                                </a>
                                            </Col>
                                })
                            }
                        </Row>
                    </Container>
                }
                <FooterSection/>
            </PlayGroundPageStyle>
        )
    }
}

export default PlayGroundPage;