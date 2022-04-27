import { useNavigate } from 'react-router-dom'
import React from 'react';
import breweryInfo from '../services/QuidditchPlayerInfo';

const QuidditchPlayerCard = (props) => {
    // setting a variable for the funcion useNavigate to use later in app
    const navigate = useNavigate();

    //Below will be code to set the url for an image inside of our brewery card
    let imageURL = '';

    /*QuidditchPlayerInfo.map((el) => {
        (el.type === props.type) ?
            imageURL = el.pictureOne
            :
            console.log('There is no image to display.');
    }) */

    return (
        <div className='details' key={props.id}>

            <h2>{props.name}</h2>

            {/* Below will be a palaceholder */}
            {/* <div className='details-image'> 
            

            {
                (imageURL === '') ? <p>There is no image to display.</p> :
                <div className='details-image'>
                    <img src={imageURL}></img>
                </div>
            }
            
            {/* created a button to take us to individual player when clicked */}
            <div className='player-button'>
                <button onClick={() => navigate(`/QuidditchPlayer/${props.name}`)}>See More Details</button>
            </div>
        </div>
    );
};

export default QuidditchPlayerCard;