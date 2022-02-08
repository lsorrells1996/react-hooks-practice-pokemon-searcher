import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemans} ) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemans.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} sprites={pokemon.sprites} /> )}
    </Card.Group>
  );
}

export default PokemonCollection;
