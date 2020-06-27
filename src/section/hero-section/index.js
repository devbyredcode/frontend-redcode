import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import ButtonPrimary from '../../components/button-primary';
import HeroSectionStyle from './index.style';

class HeroSection extends Component{
    
    animateScrollDown(){
        alert('EGA');
    }

    render(){
        return(
            <HeroSectionStyle>
                <Container fluid={true}>
                    <Row className="hero-section">
                        <div className="hero-section__title">
                            <Fade up>
                                <h1>WE CREATE <span className="red">WEBSITE</span> AND <span className="red">MOBILE</span> <br/>APPS PRODUCTS</h1>
                                <p></p>
                            </Fade>
                        </div>
                        <div className="hero-section__action">
                            <ButtonPrimary
                                onClick={this.animateScrollDown}
                                class="btn--theme-red"
                                label="SEE CASE STUDY"/>
                        </div>
                        <div className="hero-section__download">
                            <a href="mailto:devbyredcode@gmail.com">HIRE US</a><span> / </span><a className="">DOWNLOAD OUR PRESENTATION</a>
                        </div>
                    </Row>
                </Container>
            </HeroSectionStyle>
        )
    }
}

export default HeroSection;