import React, { Component } from 'react'
import AboutServiceSectionStyle from './index.style';
import LabelPrimary from '../../components/label-primary';
import {Container} from 'reactstrap';

class AboutBioSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemServices : [
                'Frontend Development',
                'Mobile Development',
                'Backend Development'
            ],
            itemTechs : [
                'HTML 5',
                'CSS 3',
                'Javascript',
                'PHP',
                'Laravel',
                'Express JS',
                'React JS',
                'React Native'
            ],
        }
    }
    render() {
        return (
            <AboutServiceSectionStyle className="container-fluid about-page">
                    <Container>
                        <h2 className="text--step-up-1">MY SERVICES</h2>
                        <p>I provide some services for your needs. For now, I do some services below. Don't worry, as time goes by I will grow up and give more services</p>
                        <ul>
                            {this.state.itemServices.map((item, index) => {
                                return <LabelPrimary
                                            key={index}
                                            label={item}/>
                            })}
                        </ul>
                    </Container>
                    <Container>
                        <h2 className="text--step-up-1">SKILLS AND EXPERTISE</h2>
                        <p>I hav some skills on below techologies to fit with the problems. Don't worry, as time goes by I will level-up my technical skills</p>
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