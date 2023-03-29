import React, { Component } from 'react'
import "../App.css"

import memesData from '../memesData';


    function imageClick(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

export default class Meme extends Component{
    render(){
       
        return(
            
            <main>
                <div className='form'>

                    <input placeholder='Top-text' className='form-input' type="text"/>
                    <input placeholder='Bottom-text' className='form-input' type="text"/>
                    <button onClick={imageClick} className='form-button'>Generate a new meme image</button>
                </div>
            </main>
        );
    }
}