import React from 'react';
import { getLevel } from '../util/character.js';

class CharacterLevel extends React.Component {
  render(){
    return (
      <div>
        Level: { getLevel(this.props.attr, this.props.kindred) }
      </div>
    );
  }
}

export default CharacterLevel;
