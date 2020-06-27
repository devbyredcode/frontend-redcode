import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsThreeColumnSectionStyle from './index.style';
import ButtonPrimary from '../../components/button-primary';
import NewsCardPrimary from '../../components/news-card-primary';
import { Link } from 'react-router-dom';

class NewsThreeColumnSection extends Component{

    componentDidMount(){
        console.log(this.props.itemData);
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
                            {this.props.itemData.map((data, index) => {
                                return <Col key={index} lg="4" md="4" sm="12" xs="12" className="pl-0 pr-0">
                                            <NewsCardPrimary
                                                image={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}
                                                title={data.title}
                                                type={this.props.type}
                                                url={data.slug == null ? data.link : `${this.props.url}/${data.slug}`}/>
                                        </Col>
                            })}
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