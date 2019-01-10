import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router'
import { Circle } from 'react-preloaders';
import AuthService from './auth/AuthService'
import { TopMenu } from './menu/TopMenu'
import { LeftMenu } from './menu/LeftMenu'
import { Container } from './Container'
import { About } from './About'
import { Main } from './Main'




export class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            user: null,
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        this.Auth.fetch("api/auth/me", 'get')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    user: res
                });
            })
    }

    render() {
        let { isLoaded, user } = this.state;
        if (!isLoaded) {
            return <Circle
                color={"#000"}
                bgColor={"#fff"}
                time={1400000} />
        }

        return <Fragment>
            <TopMenu user={user} />
            <div className="container main">
                <div className="row">
                    <LeftMenu />
                    <div className="col-9">
                        <Switch>
                            <Route exact path='/root' component={Main} />
                            <Route exact path='/root/about' component={About} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}