import React from 'react';

class PersonalAdds extends React.Component {
  render(){
   var sumofarray = function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
   };
    var multiplier = function(org, mod){
      if(mod > 1){
        return Math.floor(org * mod);
      } else {
        return Math.ceil(org * mod);
      }
    };
    var strtotal = multiplier(this.props.attr.str.reduce(sumofarray),
                              this.props.kindred.strmod);
    var dextotal = multiplier(this.props.attr.dex.reduce(sumofarray),
                              this.props.kindred.dexmod);
    var spdtotal = multiplier(this.props.attr.spd.reduce(sumofarray),
                              this.props.kindred.spdmod);
    var lktotal = multiplier(this.props.attr.lk.reduce(sumofarray),
                              this.props.kindred.lkmod);
    return (
      <div>
        Personal Adds: {
		Math.max(0,strtotal-12)+
		Math.max(0,dextotal-12)+
		Math.max(0,spdtotal-12)+
		Math.max(0,lktotal-12)
	}
      </div>
    );
  }
}

export default PersonalAdds;
