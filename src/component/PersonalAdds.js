import React from 'react';

class PersonalAdds extends React.Component  {
  render(){
    return (
      <div>
        Personal Adds: { this.props.personalAdds }
      </div>
    );
  }
}

export default PersonalAdds;
