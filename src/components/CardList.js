import React from "react"
import Card from "./Card"

const CardList = ({albums})=>{

   

    return(
        <div className="flex justify-center flex-wrap">
            {
                albums.map((value, key)=>{
                    if(key>20){
                        return;
                    }
                    return(
                        <Card 
                            key={key}
                            userId={value.userId} 
                            id={value.id} 
                            title={value.title}/>
                    )  
                })
            }
        </div>
    )
}

export default CardList;