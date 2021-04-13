import React from 'react'
import './Community.css'
import CommunityImage from '../../assets/images/Community-Desktop.png'

function Community() {
    return (
            <div className="Com-container">
                    <div className="text-Com-container">
                        <h1 className="med-heading-Com">COMMUNITY FOR ALL</h1>
                        <p className="med-para-Com">
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipisci
                            ng elit, sed diam nonummy nibh 
                            euismod tincidunt.
                        </p>
                        <button className="med-button-Com">start Now</button>
                    </div>

                    <div className="image-container-Com">
                        <img src={CommunityImage} /> 
                    </div>
            
                        
                    </div>
    )
}

export default Community;
