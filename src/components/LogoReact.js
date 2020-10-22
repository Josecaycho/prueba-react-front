import React, {Component} from 'react'
import logo from './../logo.svg';

export default class LogoReact extends Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}