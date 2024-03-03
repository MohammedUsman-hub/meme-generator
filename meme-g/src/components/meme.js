import React from 'react'
import "../App.css"

import memesData from '../memesData.js';

/*function imageClick(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
}*/


export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className='form'>
                <input placeholder='Top-Text' className='form-input' type="text"/>
                <input placeholder='Bottom-Text' className='form-input' type='text'/>
                
                <button onClick={getMemeImage} className='form-button'>Genereate a new meme Image</button>
            </div>
            <img src={meme.randomImage} className='meme-img'></img>
        </main>
    )
}
/**/