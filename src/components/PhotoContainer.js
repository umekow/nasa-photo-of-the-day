import React from 'react'

const PhotoContainer = (props) =>{
    return(
        <div className="photo-container">
            <img src={props.url} alt={props.title} />
        </div>
    )
}

export default PhotoContainer