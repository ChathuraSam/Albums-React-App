import React from "react";

const SearchBox = ({placeholder, onSearchCgange})=>{
    return(
        <div>
            <input 
                className="ma3 outline pa1" 
                type="search"
                placeholder={placeholder}
                onChange={onSearchCgange}
            />
        </div>
    )
}

export default SearchBox;