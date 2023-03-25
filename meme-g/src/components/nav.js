import React, { Component } from 'react'
import "../App.css"

export default class Nav extends Component{
    render() {
        return (
            <nav className='nav'>
                <img id='nav-logo' src='images/trollface.png'></img>
                <span className='span-meme-gen'>Meme Generator</span>
                <span className=''></span>
            </nav>
        );
    }
}