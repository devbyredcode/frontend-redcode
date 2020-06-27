import React, { Component } from 'react'
import AboutBioSectionStyle from './index.style';
import { Container } from 'reactstrap';

class AboutBioSection extends Component {
    render() {
        return (
            <AboutBioSectionStyle className="container-fluid">
                <Container>
                    <h2 className="text--step-up-1">ABOUT REDCODE</h2>
                    <p>REDCODE is a team. Since 2018 we start to solve your problem by digitalize your products. We solve your problem with our best practice. We also write some stories and do some experiments. Lets touch us on Email and we will contact you as soon as possible</p>
                </Container>
            </AboutBioSectionStyle>
        )
    }
}

export default AboutBioSection;