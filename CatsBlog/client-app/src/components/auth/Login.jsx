import React from 'react';
import AuthService from './AuthService.jsx'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errorMessage: ''
        }
        this.Auth = new AuthService();
    }

    inputChange = e => this.setState({ [e.target.name]: e.target.value })

    formIsValid = () => {

        let { login, password } = this.state;

        if (!login || !password) {
            this.setState({ errorMessage: 'Заполните все данные' });
            return false;
        }

        return true
    }

    onLoginSubmit = (e) => {
        e.preventDefault();

        if (!this.formIsValid())
            return false;

        this.Auth.login(this.state.login, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                this.setState({ errorMessage: 'Неправильный логин или пароль' });
            })
    }

    render() {
        let { login, password, errorMessage } = this.state;

        if (this.Auth.loggedIn())
            return <Redirect to='/feed' />

        return <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <form
                        onSubmit={this.onLoginSubmit}
                        style={{paddingTop: 300}}>
                        <div className="form-group">
                            <label>Login</label>
                            <input
                                name="login"
                                type="text"
                                className="form-control"
                                placeholder="Enter your login"
                                value={login}
                                onChange={this.inputChange} />
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={this.inputChange} />
                            <button type="submit" className="btn btn-primary mb-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    }
}