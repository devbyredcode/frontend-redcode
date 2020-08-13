import React, { Component } from 'react'
import AboutBioSectionStyle from './index.style';
import { Container } from 'reactstrap';

class AboutBioSection extends Component {
    render() {
        return (
            <AboutBioSectionStyle className="container-fluid">
                <Container>
                    <img src="/image/icon/profile.jpg" alt="Ega Javier Harwenda Profile" draggable="false"/>
                    <h2 className="text--step-up-1">ABOUT HARALAB</h2>
                    <p>Hello, my name is Ega Javier Harwenda. I start my journey as a Web Developer since 2018 at my life as a collegers. I start to speak using PHP on the server-side and Javascript for the client-side. Right now, Im mastering my skills on learn how to implement Javascript for the server-side and mobile apps development</p>
                </Container>
            </AboutBioSectionStyle>
        )
    }
}

export default AboutBioSection;