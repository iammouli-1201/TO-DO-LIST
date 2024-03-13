import React from "react";
import './Search.css';
function Search({search,setSearch})
{
    return(
      <div className="main1">
       <form id='Demo1' action="" onSubmit={(e)=>e.preventDefault()}>
        <label> Search: </label>
        <input type="text" 
        placeholder="Search"
        id="search"
        role="searchbox"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
         />
       </form>
       </div>
    );
}
export default Search;