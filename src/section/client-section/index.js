import React, { Component } from 'react';
import ClientSectionStyle from './index.style';
import { Container, Row, Col } from 'reactstrap';

class ClientSection extends Component{
    render(){
        return(
            <ClientSectionStyle>
                <Container fluid={true}>
                    <div>
                        <h2 className="text--step-up-1">our happy <span className="red">clients</span> so far</h2>
                    </div>
                    <Row>
                        <Col>
                            <img src="./../../image/client/client.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src="./../../image/client/client.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src="./../../image/client/client.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src="./../../image/client/client.png" alt="" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </ClientSectionStyle>
        );
    }
}

export default ClientSection;