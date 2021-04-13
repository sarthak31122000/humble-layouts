import React from 'react'
import './Nutrition.css'
import NutImage from '../../assets/images/Experts.png'

function Nutrition() {
    return (
        <div className="nut-container">
        <div className="text-nut-container">
            <h1 className="med-heading-nut">Meet with
                      Diet/Nutrition expert</h1>
            <p className="med-para-nut">
                Lorem ipsum dolor sit amet, 
                consectetuer adipisci
                ng elit, sed diam nonummy nibh 
                euismod tincidunt.
            </p>
            <button className="med-button-nut">start Now</button>
        </div>

        <div className="image-container-nut">
            <img src={NutImage} /> 
        </div>
  
            
        </div>
    )
}

export default Nutrition
