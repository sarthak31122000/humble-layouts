import React from 'react'
import './Meditation.css'
import MedImage from '../../assets/images/Meditation-01.png'

function Meditation() {
    return (
        <div className="med-container">
        <div className="text-container">
            <h1 className="med-heading">Meditation</h1>
            <p className="med-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, numquam harum ea voluptate tempore adipisci fugit in quibusdam reprehenderit est?
            </p>
            <button className="med-button">start Now</button>
        </div>

        <div className="image-container">
            <img src={MedImage} /> 
        </div>
  
            
        </div>
    )
}

export default Meditation
