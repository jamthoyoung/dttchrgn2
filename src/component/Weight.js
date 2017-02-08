import React from 'react';

class Weight extends React.Component {
  render(){
    var heightInCm = 126.4 + (this.props.height*5.6);
    // ideal weight for male uses devine formula
    var idealWeightKg = Math.round(
          (50 + (0.9055118 * (heightInCm-152.4))) * this.props.kindred.weightmod
                           );
    return (
      <span>
        Weight: {idealWeightKg} kg
      </span>
    );
  }
}

export default Weight;
