import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokedex, setPokedex] = useState([])
  const [searchText, setSearchText] = useState('')

  function filterPokemon(text){
    setSearchText(text)
  }

  function fetchPokemon(){
    fetch('http://localhost:3001/pokemon')
    .then(response=>response.json())
    .then(data => {
      setPokedex(data.filter(pokemon => pokemon.name.includes(searchText)))
    })
  }

  useEffect(fetchPokemon, [searchText])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm fetchPokemon={fetchPokemon}/>
      <br />
      <Search searchText={searchText} filterPokemon={filterPokemon}/>
      <br />
      <PokemonCollection pokedex={pokedex} searchText={searchText}/>
    </Container>
  );
}

export default PokemonPage;
