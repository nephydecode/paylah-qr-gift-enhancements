import React from 'react';
import './App.css';
import Navibar from './components/Navbar';
import Welcome from './components/Welcome';
import Redemptions from './components/Redemptions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Success from './components/Success';
import Failure from './components/Failure';
import Sending from './components/Sending';
import 'typeface-open-sans';
import 'typeface-roboto';
import { Container, Row, Col } from 'react-bootstrap';

function RedemptionPage() {
    return (
        <>
            <Welcome />
            <Redemptions />
        </>
    );
}

function App() {
    return (
        <>
            <div className="App">
                <Navibar />
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact component={RedemptionPage} />
                        <Route path="/success" component={Success} />
                        <Route path="/failure" component={Failure} />
                        <Route path="/sending" component={Sending} />
                    </Switch>
                </BrowserRouter>
            </div>

            <footer className={'footer  p-4'}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <ul className="none p-0 footer-links text-white">
                                <li>
                                    <a
                                        href="http://www.dbs.com/terms/default.page"
                                        target="_blank"
                                        className={'text-white'}
                                        ops="Terms &amp; Conditions"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                    <span>|</span>
                                </li>
                                <li>
                                    <a
                                        href="http://www.dbs.com/privacy/default.page"
                                        target="_blank"
                                        className={'text-white'}
                                        ops="Privacy Policy"
                                    >
                                        Privacy Policy
                                    </a>
                                    <span>|</span>
                                </li>
                                <li>
                                    <a
                                        href="http://www.dbs.com/fairdealing/default.page"
                                        target="_blank"
                                        className={'text-white'}
                                        ops="Fair Dealing Commitment"
                                    >
                                        Fair Dealing Commitment
                                    </a>
                                    <span>|</span>
                                </li>
                                <li>
                                    <a
                                        href="/personal/compliance-tax-requirements/index.html"
                                        target="_blank"
                                        className={'text-white'}
                                        ops="Compliance with Tax Requirements"
                                    >
                                        Compliance with Tax Requirements
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className={'text-left pt-2 pb-2'}>
                            <strong className={'cpyright'}>
                                &copy;{new Date().getFullYear()} DBS Bank Ltd | Co. Reg. No. 196800306E
                            </strong>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default App;
