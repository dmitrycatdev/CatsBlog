import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, IndexRoute  } from 'react-router-dom'
import { Root } from './components/Root.jsx'
import Login from './components/auth/Login'
import AuthService from './components/auth/AuthService'
import { Container } from './components/Container'
import { About } from './components/About'
import { Main } from './components/Main'


class App extends Component {
    constructor(props) {
        super(props);

        this.Auth = new AuthService();
    }

    render() {
        var { user } = this.props;
        return (
            <BrowserRouter>
                <Fragment>
                    {
                        window.location.pathname == '/' &&  <Redirect push to='/root' />
                    }
                    <Route path='/root' component={Root} />
                    <Route exact path='/login' component={Login} />
                </Fragment>
            </BrowserRouter>
        );
            
    }
}

export default App;
