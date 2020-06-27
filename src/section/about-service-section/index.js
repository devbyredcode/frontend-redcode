import React, { Component } from 'react'
import AboutServiceSectionStyle from './index.style';
import LabelPrimary from '../../components/label-primary';
import {Container, Row, Col} from 'reactstrap';

class AboutBioSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemServices : [
                'Frontend Development',
                'Mobile Development',
                'Backend Development',
                'User Interface Design',
                'User Experience Wireframing'
            ],
            itemTechs : [
                'Javascript',
                'Laravel',
                'Express JS',
                'React JS',
                'React Native',
                'Java Android'
            ],
        }
    }
    render() {
        return (
            <AboutServiceSectionStyle className="container-fluid about-page">
                    <Container>
                        <h2 className="text--step-up-1">OUR SERVICES</h2>
                        <p>we provide some services for your needs. As time goes by, we grow up and we will give more services</p>
                        <ul>
                            {this.state.itemServices.map((item, index) => {
                                return <LabelPrimary
                                            key={index}
                                            label={item}/>
                            })}
                        </ul>
                    </Container>
                    <Container>
                        <h2 className="text--step-up-1">OUR TECHS</h2>
                        <p>we provide some techologies to fit for the problem solving. As time goes by, we will level-up our techs</p>
                        <ul>
                            {this.state.itemTechs.map((item, index) => {
                                return <LabelPrimary
                                            key={index}
                                            label={item}/>
                            })}
                        </ul>
                    </Container>
            </AboutServiceSectionStyle>
        )
    }
}

export default AboutBioSection;