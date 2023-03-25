import React, { Component } from 'react'
import "../App.css"

export default class Nav extends Component{
    render() {
        return (
            <nav className='nav'>
                <img id='nav-logo' src='images/trollface.png'></img>
                <span className='nav-span'>Meme Generator</span>
            </nav>
        );
    }
}