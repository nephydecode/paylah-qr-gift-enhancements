import React, { Component } from 'react';
import Method from './Method';
import { Row, Container } from 'react-bootstrap';

class Redemptions extends Component {
    state = {};
    render() {
        return (
            <Container className={'p-4'}>
                <Method highlighted />
                <Method />
                <Method />
            </Container>
        );
    }
}

export default Redemptions;
