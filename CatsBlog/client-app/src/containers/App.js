import React, { Component, Fragment } from 'react';
import '../App.css';
import { BrowserRouter, Route, Redirect  } from 'react-router-dom'
import { Root } from '../components/Root.jsx'
import Login from '../components/auth/Login'
import AuthService from '../components/auth/AuthService'
import { Landing } from '../components/Landing'
import { connect } from 'react-redux'
import { setUserInfo } from '../actions/UserActions'  




class App extends Component {
    constructor() {
        super();

        this.Auth = new AuthService();
    }

    render() {
        var { user } = this.props;

        var redirectTo = this.Auth.loggedIn() ? '/root' : '/landing';
        return (
            <BrowserRouter>
                <Fragment>
                    {
                        window.location.pathname == '/' && <Redirect push to={redirectTo} />
                    }
                    <Route path='/root' render={() => <Root {...this.props} />} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/landing' component={Landing} />
                </Fragment>
            </BrowserRouter>
        );
            
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
      setUserInfo: info => dispatch(setUserInfo(info)),
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
