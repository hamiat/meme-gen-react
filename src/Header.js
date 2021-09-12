import React from 'react'
import trollFace from './assets/troll-face.png'


//functional component because it just displays things (presentation logic)
function Header(){
    return(
        <header>
            <img 
            src={trollFace}
            alt="troll face, problem?"
            />
            <h1>Create your own meme!</h1>
        </header>
    )

  
}

export default Header