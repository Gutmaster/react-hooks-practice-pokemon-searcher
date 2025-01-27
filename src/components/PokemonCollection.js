import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokedex}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokedex.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
