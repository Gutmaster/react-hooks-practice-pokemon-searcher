import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const frontSprite = pokemon.sprites.front
  const backSprite = pokemon.sprites.back
  const [sprite, setSprite] = useState(frontSprite)

  function flipCard(){
    setSprite(sprite === frontSprite ? backSprite : frontSprite)
  }

  return (
    <Card onClick={flipCard}>
      <div>
        <div className="image">
          <img src={sprite} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
