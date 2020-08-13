import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FooterSectionStyle from './index.style';

class FooterSection extends Component{
    render(){
        return(
            <FooterSectionStyle>
                <Container fluid={true} className="footer-wrapper">
                    <Row>
                        <Col className="footer-wrapper__menu" lg="12" md="12">
                            <Link to="/case-study">CASESTUDY</Link>
                            <Link to="/playground">PLAYGROUND</Link>
                            <Link to="/story">STORY</Link>
                            <a href="mailto:devbyredcode@gmail.com">CONTACT</a>
                            <Link to="/about">ABOUT</Link>
                        </Col>
                        <Col className="footer-wrapper__logo" lg="12" md="12" sm="12" xs="12">
                            <a href="mailto:devbyredcode@gmail.com">MAIL ME!</a>
                        </Col>
                        <Col className="footer-wrapper__content" lg="12" md="12" sm="12" xs="12">
                            <p>copyright&copy; 2020 ega javier harwenda</p>
                        </Col>
                    </Row>
                </Container>
            </FooterSectionStyle>
        )
    }
}

export default FooterSection;