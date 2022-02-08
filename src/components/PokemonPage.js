import React, {useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemans, setPokemans] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(fetchedData => setPokemans(fetchedData))
  }, [])

  const addStateToPokemans = pokeman => {
    setPokemans([pokeman, ...pokemans])
  }


  const filterPokemans = e => {
    setSearchValue(e.target.value)
  }

  const searchedPokemans = pokemans.filter(pokeman => pokeman.name.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addStateToPokemans={addStateToPokemans} />
      <br />
      <Search filterPokemans={filterPokemans} />
      <br />
      <PokemonCollection pokemans={searchedPokemans} />
    </Container>
  );
}

export default PokemonPage;
