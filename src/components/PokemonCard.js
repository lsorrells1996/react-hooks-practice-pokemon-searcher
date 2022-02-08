import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon: {name, hp}, sprites} ) {

  const [isFront, setIsFront] = useState(true)

  const changeSprite = () => {
    setIsFront( !isFront )
  }
  return (
    <Card>
      <div>
        <div onClick={changeSprite} className="image">
          {isFront ? <img src={sprites.front} alt={name}/> : <img src={sprites.back} alt={name}/>}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
