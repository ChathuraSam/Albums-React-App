import React from "react";
import './card.css'

const Card = ({userId, id, title})=>{
    return(
        <div className="outline ma2 grow shadow-3 card w5 tc">
            <img src={`https://picsum.photos/seed/${title}/250/250`} alt={title}/>
            <p>{title}</p>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default Card;