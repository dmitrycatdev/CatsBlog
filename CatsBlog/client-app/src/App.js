import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Root } from './components/Root.jsx'
import Login from './components/auth/Login'
import AuthService from './components/auth/AuthService'
import { Container } from './components/Container'
import { About } from './components/About'
import { Main } from './components/Main'


class App extends Component {
    constructor() {
        super();

        this.Auth = new AuthService();
    }

    render() {
        var { user } = this.props;
        return (
            <BrowserRouter >
                <div>
                    <Route path='/root' render={() => <Root />} >
                        <Switch>
                            <Route path='/root' component={Main} />
                            <Route path='/root/about' component={About} />
                        </Switch>
                    </Route>
                    <Route path='/login' component={Login} />
                </div>
            </BrowserRouter >       
        );
    }
}

export default App;
