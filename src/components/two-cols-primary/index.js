import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import TwoColsPrimaryStlye from './index.style';
import Fade from 'react-reveal/Fade';

class TwoColsPrimary extends Component{
    render(){
        return(
            <TwoColsPrimaryStlye>
                <Container fluid={true} className="two-cols-primary-wrapper">
                    <Row className={this.props.direction}>
                        <Col className="two-cols-primary-wrapper__image" lg="6" md="6" sm="12" xs="12">
                            <picture>
                                <source srcSet={`./../../image/illustration/${this.props.char1}.webp`} type="image/webp"/>
                                <img src={`./../../image/illustration/${this.props.char1}.png`} alt="" className={`img-fluid character ${this.props.position} ${this.props.animate1}`} draggable="false"/>
                            </picture>
                            <picture>
                                <source srcSet={`./../../image/illustration/${this.props.image}.webp`} type="image/webp"/>
                                <img src={`./../../image/illustration/${this.props.image}.png`} alt="" className={`img-fluid background`} draggable="false"/>
                            </picture>
                            <picture>
                                <source srcSet={`./../../image/illustration/${this.props.char2}.webp`} type="image/webp"/>
                                <img src={`./../../image/illustration/${this.props.char2}.png`} alt="" className={`img-fluid character ${this.props.position2} ${this.props.animate2}`} draggable="false"/>
                            </picture>
                        </Col>
                        <Col className="two-cols-primary-wrapper__text" lg="6" md="6" sm="12" xs="12">
                            <Fade bottom cascade>
                                <div className="two-cols-primary-wrapper__text__content">
                                    <h3 className="text--step-down-1">{this.props.title}</h3>
                                    <p className="text--step-down-4 large">{this.props.description}</p>
                                    <p className="text--step-down-4 small">{this.props.mobile_desc}</p>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </TwoColsPrimaryStlye>
        )
    }
}

export default TwoColsPrimary;