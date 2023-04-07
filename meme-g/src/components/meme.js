import React from 'react'
import "../App.css"

import memesData from '../memesData';

/* 
   function imageClick(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
    }*/

export default function Meme(){
       
    const[memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

        return(
            
            <main>
                <div className='form'>
                    <input placeholder='Top-text' className='form-input' type="text"/>
                    <input placeholder='Bottom-text' className='form-input' type="text"/>
                    <button onClick={getMemeImage} className='form-button'>Generate a new meme image</button>
                </div>
                <img src={memeImage} className='meme-img'/>
            </main>

        );
    
}
