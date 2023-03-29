import React, { Component } from 'react'
import "../App.css"

export default class Meme extends Component{
    render(){
        return(
            <main>
                <div className='form'>

                    <input placeholder='Top-text' className='form-input' type="text"/>
                    <input placeholder='Bottom-text' className='form-input' type="text"/>
                    <button className='form-button'>Generate a new meme image</button>
                </div>
            </main>
        );
    }
}