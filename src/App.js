import React from 'react';
import './App.css';
import Navibar from './components/Navbar';
import Welcome from './components/Welcome';
import Redemptions from './components/Redemptions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <div className="App">
            <Navibar />
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact component={RedemptionPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
