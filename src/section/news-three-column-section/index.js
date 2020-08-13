import React, { Component } from 'react';
import axios from '../../axios';
import { Container, Row, Col } from 'reactstrap';
import NewsThreeColumnSectionStyle from './index.style';
import ButtonPrimary from '../../components/button-primary';
import NewsCardPrimary from '../../components/news-card-primary';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

class NewsThreeColumnSection extends Component{
    constructor(props){
        super(props)
        this.state = {
            articleItems : []
        }
    }

    componentDidMount(){
        axios.get('/api/v1/landing-page')
            .then(response => {
                const data = response.data.data.data_story;
                this.setState({...this.state, articleItems : data});
            })
            .catch(error => {
                console.error(error); 
            })

    }

    render(){
        return(
            <NewsThreeColumnSectionStyle>
                <Container fluid={true}>
                    <div>
                        <h2 className="text--step-up-1">{this.props.title} <span className="red">{this.props.highlighted}</span></h2>
                    </div>
                    <Container>
                        <Row className="news-wrapper">
                            {
                                this.state.articleItems.length < 1 ? 
                                <Skeleton width={window.innerWidth > 768 ? 330 : 300} height={window.innerWidth > 768 ? 400 : 300} count={1} style={{margin: "0px 20px"}}/> :     
                                this.state.articleItems.map((data, index) => {
                                    return <Col key={index} lg="4" md="4" sm="12" xs="12" className="pl-0 pr-0">
                                                <NewsCardPrimary
                                                    image={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}
                                                    title={data.title}
                                                    type={this.props.type}
                                                    url={data.slug === null ? data.link : `${this.props.url}/${data.slug}`}/>
                                            </Col>
                                })
                            }
                        </Row>
                    </Container>
                    <div className="mt-4">
                        <Link to={this.props.url}>
                            <ButtonPrimary label={this.props.btnLabel} class="btn--theme-red"/>
                        </Link>
                    </div>
                </Container>
            </NewsThreeColumnSectionStyle>
        )
    }
}

export default NewsThreeColumnSection;