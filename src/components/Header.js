import React from "react";
import './header.css'

const Header = ({title})=>{
    return(
        <div className="header pa2">
            <h1>{title}</h1>
        </div>
    )
}

export default Header;