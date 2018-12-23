import React from 'react';
import '../App.css';
import { Circle } from 'react-preloaders';
import AuthService from './auth/AuthService'


export class Main extends React.Component {
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
                color={"#fe8200"}
                bgColor={"#fff"}
                time={14000} />
        }
            
        return <div className="App">
            <header className="App-header">
                <p style={{fontSize: '400%'}}>
                    {user ? user.firstName : "Obana"}
                </p>
            </header>
        </div>
    }
}