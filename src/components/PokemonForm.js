import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({fetchPokemon}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontSprite, setFrontSprite] = useState('')
  const [backSprite, setBackSprite] = useState('')

  function newPokemon(){
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name':name,
        'hp':hp,
        'sprites':{'front':frontSprite, 'back':backSprite},
      })
    }).then(() => fetchPokemon())
  }
  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={newPokemon}>
        <Form.Group widths="equal">
          <Form.Input onChange={(event)=>setName(event.target.value)} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(event)=>setHp(event.target.value)} value={hp}  fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={(event)=>setFrontSprite(event.target.value)} value={frontSprite} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={(event)=>setBackSprite(event.target.value)} value={backSprite}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
