import React, { Component } from 'react';
import Method from './Method';
import { Row, Container } from 'react-bootstrap';

class Redemptions extends Component {
    state = {};
    render() {
        return (
            <Container className={'p-4'}>
                <Method highlighted link={'/dey'} title={'DBS PayLah!'} helperText={'Redeem your QR Gift with DBS PayLah! App'} actionText={'Download PayLah!'} />
                <Method link={'/dey'} title={'DBS PayLah!'} helperText={'Redeem your QR Gift with DBS PayLah! App'} actionText={'Download PayLah!'} />
                <Method link={'/dey'} title={'DBS PayLah!'} helperText={'Redeem your QR Gift with DBS PayLah! App'} actionText={'Download PayLah!'}/>
            </Container>
        );
    }
}

export default Redemptions;
