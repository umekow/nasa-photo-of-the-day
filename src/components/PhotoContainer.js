import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Photo = styled.div`
width: 90%; 
margin:0 auto; 

`

const PhotoContainer = (props) =>{
    return(
        <Photo>
            <img src={props.url} alt={props.title} />
        </Photo>
    )
}

export default PhotoContainer