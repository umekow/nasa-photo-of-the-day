import React from 'react'
import logo from "../images/logo.png"

const Nav = () => {

    return(
        <div className ="NavBar">
            <div className="img-container">
                <img scr={logo} alt="nasa logo" />
            </div>

            <ul className="nav">
                <li className="link"><a href="#">POTD</a></li>
                <li className="link"><a href="#">ABOUT</a></li>
                <li className="link"><a href="#">LEARN MORE</a></li>
                <li className="link"><a href="#">NASA TV</a></li>
            </ul>
            
        </div>
    )
}
export default Nav