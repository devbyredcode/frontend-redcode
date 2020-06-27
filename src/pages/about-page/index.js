import React, { Component } from 'react';
import AboutHeroSection from '../../section/about-hero-section';
import AboutBioSection from '../../section/about-bio-section';
import AboutServiceSection from '../../section/about-service-section';
import FooterSection from '../../section/footer-section';

class AboutPage extends Component{  
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <>
                <AboutHeroSection/>
                <AboutBioSection/>
                <AboutServiceSection/>
                <FooterSection/>
            </>
        )
    }
}

export default AboutPage;