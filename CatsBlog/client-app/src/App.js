import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Main } from './components/Main.jsx'
import Login from './components/auth/Login'
import AuthService from './components/auth/AuthService'

class App extends Component {
    constructor() {
        super();

        this.Auth = new AuthService();
    }

    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/login' component={Login} />
                </div>
            </BrowserRouter >       
        );
    }
}

export default App;
