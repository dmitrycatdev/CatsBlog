import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router'
import { Circle } from 'react-preloaders';
import AuthService from './auth/AuthService'
import { TopMenu } from './menu/TopMenu'
import { LeftMenu } from './menu/LeftMenu'
import { About } from './About'
import { Main } from './Main'
import { Chat } from './Chat'





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
        this.Auth.fetch("/api/auth/me", 'get')
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
                            <Route path='/root/main' component={Main} />
                            <Route path='/root/chat' component={Chat} />
                            <Route path='/root/about' component={About} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}
