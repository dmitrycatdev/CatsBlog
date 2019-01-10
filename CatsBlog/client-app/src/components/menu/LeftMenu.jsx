import React from 'react'
import { Link } from 'react-router-dom'

export class LeftMenu extends React.Component {

    render() {
        return <div className="left-menu col-3">
            <ul>
                <li>
                    <Link to='/root'>MAIN </Link>
                </li>
                <li>
                    <Link to='/root/about' >ABOUT </Link>
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    }
}