import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import ButtonPrimary from '../../components/button-primary';
import AboutHeroSectionStyle from './index.style';

class AboutHeroSection extends Component{
    
    componentDidMount(){
        const hamMenu = document.querySelector('.ham-menu');
        hamMenu.classList.add('inverse');
    }

    componentWillUnmount(){
        const hamMenu = document.querySelector(".ham-menu");
        hamMenu.classList.remove('inverse');
    }

    render(){
        return(
            <AboutHeroSectionStyle>
                <Container fluid={true}>
                    <Row className="hero-section">
                        <div className="hero-section__title">
                            <Fade up>
                                <h1>READY TO <span className="red">DIGITALIZE</span> AND SOLVE <br/><span className="red">YOUR</span> PROBLEM</h1>
                                <p></p>
                            </Fade>
                        </div>
                        <div className="hero-section__action">
                            <ButtonPrimary
                                class="btn--theme-red"
                                label="SEE HISTORY"/>
                        </div>
                        <div className="hero-section__download">
                            <a href="mailto:egaharwenda@gmail.com">HIRE ME</a><span> / </span><a href="/files/EGA_JAVIER_HARWENDA_CV.pdf" target="_blank" className="">DOWNLOAD MY RESUME</a>
                        </div>
                    </Row>
                </Container>
            </AboutHeroSectionStyle>
        )
    }
}

export default AboutHeroSection;