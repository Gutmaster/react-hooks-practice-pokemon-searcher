import React from "react";

function Search({searchText, filterPokemon}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchText} onChange={(event) => filterPokemon(event.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
