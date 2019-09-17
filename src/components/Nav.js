import React from 'react'
import logo from "../images/logo.svg"
import styled from 'styled-components'



const NavBar = styled.div`
    display:flex; 
    justify-content:space-between; 
    padding:0 2%;
    font-family: 'Orbitron', sans-serif;
    font-weight:bold; 
    background:black; 
`

const ListOfLinks = styled.ul`
    list-style-type:none; 
    width:50%;
    display:flex; 
    justify-content:space-between; 
    align-items:center;
    margin:1%;
    
    a{
        text-decoration:none;
        font-size: 1.5rem; 
        color:white; 
        padding-bottom:5px; 
        

        &:hover{ 
            border-bottom:4px solid blue; 
        }
    }
`
const Nav = () => {

    return(
        <NavBar>
            <div className="img-container">
                <img src={logo} alt="nasa logo" />
            </div>

            <ListOfLinks>
                <li><a href="#">POTD</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">LEARN MORE</a></li>
                <li><a href="#">NASA TV</a></li>
            </ListOfLinks>
            
        </NavBar>
    )
}
export default Nav