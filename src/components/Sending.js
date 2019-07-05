import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cross from '../assets/cross.svg';
import oval from '../assets/oval.svg';
import lcloud from '../assets/envelope-left.svg';
import rcloud from '../assets/envelope-right.svg';
import flyplane from '../assets/flying-envel.svg';
import './Sending.css';

class Sending extends Component {
    state = {};
    render() {
        return (
            <div className={''}>
                <Container className="">
                    <Row>
                        <Col xs={12} className={'d-flex flex-column justify-content-center sending-screen-size'}>
                            <div className={'d-flex flex-row justify-content-center'}>
                                <div className="dot mt-5" style={{}}>
                                    <div
                                        className="dot2"
                                        style={{
                                            position: 'relative',
                                            top: '25%',
                                        }}
                                    >
                                        <img
                                            src={flyplane}
                                            style={{
                                                position: 'relative',
                                                zIndex: 999,
                                                left: '-2.5%',
                                                marginTop: '20%',
                                            }}
                                            className={'plane-animation'}
                                        />
                                    </div>
                                </div>
                            </div>
<div className={'pt-3'}><p className={'text-center'}>Help Lah!</p></div>

                            <img src={rcloud} className="mt-5 base-animation base-animation-delay-11" style={{ position: 'absolute' , top: '10%'}} />
                            <img src={lcloud} style={{ position: 'absolute', top: '30%', zIndex: 999 }} className="base-animation base-animation-delay-5" />
                            <img src={cross} style={{ position: 'absolute', top: '40%', zIndex: 999 }} className={'base-animation base-animation-delay-6'} />
                            <img src={cross} style={{ position: 'absolute',top: '44%', zIndex: 999 }} className={'base-animation base-animation-delay-1'} />
                            <img src={cross} style={{ position: 'absolute',top: '60%', zIndex: 999 }} className={'base-animation base-animation-delay-7'} />
                            <img src={oval} style={{ position: 'absolute', top: '65%',zIndex: 999 }} className={'base-animation base-animation-delay-2'} />
                            <img src={oval} style={{ position: 'absolute', top: '42%', zIndex: 999 }} className={'base-animation base-animation-delay-3'} />
                            <img src={oval} style={{ position: 'absolute', top: '58%', zIndex: 999 }} className={'base-animation base-animation-delay-8'}/>
                            <img src={oval} style={{ position: 'absolute', top: '68%', zIndex: 999 }} className={'base-animation base-animation-delay-9'}/>
                            <img src={rcloud} className="mt-5" style={{ position: 'absolute', top: '60%' }} className={'base-animation base-animation-delay-10'}/>
                            <img src={lcloud} style={{ position: 'absolute', top: '70%', zIndex: 999 }} className={'base-animation base-animation-delay-4'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Sending;
