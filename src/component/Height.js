import React from 'react';

class Height extends React.Component {
  render(){
    var heightInCm = Math.round(
       (126.4 + (this.props.height*5.6)) * this.props.kindred.heightmod
                               );
    return (
      <span>
        Height: {heightInCm} cm
      </span>
    );
  }
}

export default Height;
