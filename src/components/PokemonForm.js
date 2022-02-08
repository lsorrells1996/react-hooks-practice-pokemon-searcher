import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addStateToPokemans}) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontURL, setFrontURL] = useState('')
  const [backURL, setBackURL] = useState('')

  const createNewPokeman = e => {
    e.preventDefault()

    const newPoke = {
      name:name,
      hp: hp,
      sprites: {
        front: frontURL,
        back: backURL
      },
    }

    addStateToPokemans(newPoke)

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={createNewPokeman}>
        <Form.Group widths="equal">
          <Form.Input onChange= {e => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange= {e => setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange= {e => setFrontURL(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange= {e => setBackURL(e.target.value)}
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
