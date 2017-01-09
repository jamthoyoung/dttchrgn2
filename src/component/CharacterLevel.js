import React from 'react';

class CharacterLevel extends React.Component {
  render(){
   var sumofarray = function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
   };
    var kinmod = function(array, mod){
      var org = array.reduce(sumofarray);
      if(mod > 1){
        return Math.floor(org * mod);
      } else {
        return Math.ceil(org * mod);
      }
    };
    return (
      <div>
        Level: {
		Math.floor(
                  Math.max(
                    kinmod(this.props.attr.str,
                      this.props.kindred.strmod),
		    kinmod(this.props.attr.con,
                      this.props.kindred.conmod),
		    kinmod(this.props.attr.dex,
                      this.props.kindred.dexmod),
		    kinmod(this.props.attr.spd,
                      this.props.kindred.spdmod),
		    kinmod(this.props.attr.lk,
                      this.props.kindred.lkmod),
		    kinmod(this.props.attr.iq,
                      this.props.kindred.iqmod),
		    kinmod(this.props.attr.wiz,
                      this.props.kindred.wizmod),
		    kinmod(this.props.attr.chr,
                      this.props.kindred.chrmod)
                  ) / 10
                )
	}
      </div>
    );
  }
}

export default CharacterLevel;
