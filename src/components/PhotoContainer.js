import React from 'react'


const PhotoContainer = (props) => {
    return(
        <div className="photo">
            <img src={props.imgUrl} alt={props.title}>
        </div>
    )
}


export default PhotoContainer