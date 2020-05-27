import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import github from './assets/github-logo.png';
import linkedinlogo from './assets/linkedinlogo.png';

function footer() {

    return(
        <footer className="mt-5">
            <Container className="headfooter-color" fluid={true} >
                <Row className="border-top justify-content-between p-1">
                    <Col className="p-2 font-weight-bolder text-white" md={3} sm={12}>
                        Hieu Nguyen
                    </Col>
                    <Col className="p-0 d-flex justify-content-center" md={3} sm={12}>
                        <a href="https://github.com/hieuvanvoW05" target="_blank" rel="noopener noreferrer"><img src={github} width="35px" height="35px" title="GitHub" alt="GitHub"/></a>
                        <a href="https://www.linkedin.com/in/hieu-nguyen-168a591a3/" target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} width="35px" height="35px" title="LinkedIn" alt="LinkedIn"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer;