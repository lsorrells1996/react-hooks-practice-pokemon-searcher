import React from "react";

function Search({filterPokemans}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={filterPokemans} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
