import React from 'react';

class CharacterGold extends React.Component {
  render(){
    return (
      <div>
        Gold: {this.props.gold} gp
      </div>
    );
  }
}

export default CharacterGold;
