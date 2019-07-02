import React, { Component } from 'react';
import Redemptions from './Redemptions';
import { Container, Row, Col } from 'react-bootstrap';
import './Welcome.css';
import decowhite from '../assets/deco-white.svg';
import decoblack from '../assets/deco-black.svg';
import shadow from '../assets/shadow.svg';
import largeqrgift from '../assets/largeqrgift.svg';
import whitearrow from '../assets/arrow-button.svg';
import { relative } from 'path';

class Welcome extends Component {
    state = {};
    render() {
        return (
            <div style={{ height: '100vh', backgroundColor: '#FA5A74' }}>
                <Container>
                    <Row className="pt-5">
                        <Col xs={12}>
                            <div className={'serialno'} style={{ fontColor: '#ffffff' }}>
                                22jCoV
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col xs={12}>
                            <div style={{ marginLeft: '-11em' }}>
                                <img src={decowhite} style={{ position: 'absolute' }} className={'bobbingStars1'} />
                                <img src={decoblack} style={{ position: 'absolute' }} className={'bobbingStars2'} />
                            </div>

                            <div>
                                <img src={largeqrgift} style={{ position: '' }} className={'bobbingUpDown'} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <img src={shadow} className={'bobbingBigSmall'} />
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12}>
                            <h1 className={'header text-white'}>QR Gift</h1>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col xs={12}>
                            <div className={'text text-white'}>
                                You have Received a QR Gift! Choose one of the following methods to redeem your gift.
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={12} />
                    </Row>
                </Container>

                <img src={whitearrow} style={{ position: 'absolute', bottom: '2em' }} />
            </div>
        );
    }
}

export default Welcome;
