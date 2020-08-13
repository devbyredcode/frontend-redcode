import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ServiceSectionStyle from './index.style';

class ServiceSection extends Component{
    state = {
        services : [
            {   img: 'star.png', title: 'WEB'},
            {   img: 'star.png', title: 'MOBILE'}
        ]
    }

    render(){
        return(
            <ServiceSectionStyle>
                <Container fluid={true}>
                        {/* <h2 className="text--step-up-1">what is our <span className="red">specialties</span>?</h2> */}
                    <Row className="service-section">
                        <Col className="service-section__left" lg="4" md="4" sm="12" xs="12">
                            <h2 className="text--step-up-1">THINGS I <span className="red">MADE</span> FOR YOU</h2>
                        </Col>
                        <Col className="service-section__right" lg="8" md="8" sm="12" xs="12">
                            {this.state.services.map((data, index) => {
                                return <p className="text--step-down-2" key={index}>{data.title} DEVELOPMENT</p>
                            })}
                        </Col>
                    </Row>
                </Container>
            </ServiceSectionStyle>
        )
    }
}

export default ServiceSection;