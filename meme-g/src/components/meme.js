import React from 'react'
import "../App.css"

import memesData from '../memesData.js';

function imageClick(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
}


export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <div className='form'>
                <input placeholder='Top-Text' className='form-input' type="text"/>
                <input placeholder='Bottom-Text' className='form-input' type='text'/>
                <button onClick={getMemeImage} className='form-button'>Genereate a new meme Image</button>
            </div>
            <img src={memeImage} className='meme-img'></img>
        </main>
    )
}

/**/
