import React from 'react'
import { Link, NavLink  } from 'react-router-dom'

export class LeftMenu extends React.Component {

    render() {
        return <div className="left-menu col-3" style={{height: '100%'}}>
            <ul>
                <li>
                    <NavLink activeClassName='active' to='/root/main'><i className="fas fa-home"></i> Главная</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/root/chat' >
                        <i className="fas fa-exclamation-circle"></i> Чат
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/root/about' >
                        <i className="fas fa-exclamation-circle"></i> О сервисе
                    </NavLink>
                </li>
            </ul>
        </div>
    }
}