import React from 'react';

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.rollOneDice = this.rollOneDice.bind(this);
    this.getMultipleDice = this.getMultipleDice.bind(this);
    this.getNewAttributeValue = this.getNewAttributeValue.bind(this);
    this.handleRerollClick = this.handleRerollClick.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.classChange = this.classChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.kindredChange = this.kindredChange.bind(this);
    this.state = 
      this.props.initFormData; 
  }
  rollOneDice(){
    return Math.ceil(Math.random() * 6);
  }
  getMultipleDice(numberofdice, taro){
    var dicearray = [];
    var i = 0;
    while(i < numberofdice){
      dicearray.push(this.rollOneDice());
      i += 1;
    }
    if (taro){
      var firstvalue = dicearray[0];
      var issame = true;
      for(var x = 1; x < numberofdice; x++){
	if(firstvalue !== dicearray[x]){
	  issame = false;
	}
      }
      if(issame){
	dicearray = dicearray.concat(this.getMultipleDice(numberofdice,true));
      }
    }
    return dicearray;
  }
  getNewAttributeValue(mod,taro){
    var dicearray = this.getMultipleDice(3,taro);
    var total = dicearray.reduce(
      function(previousValue, currentValue, currentIndex, array) {
	return previousValue + currentValue;
      });
    if(mod > 1){
      total = Math.floor(total * mod);
    } else {
      total = Math.ceil(total * mod);
    }
    console.log(dicearray + " * " + mod);
    return { value: total, specialized : false};
  }
  handleRerollClick() {
    console.log("prestate:" + this.state);
    var newattributes = {
      str: this.getMultipleDice(3,true),
      con: this.getMultipleDice(3,true),
      dex: this.getMultipleDice(3,true),
      spd: this.getMultipleDice(3,true),
      lk: this.getMultipleDice(3,true),
      iq: this.getMultipleDice(3,true),
      wiz: this.getMultipleDice(3,true),
      chr: this.getMultipleDice(3,true)
    };
    var wt = this.getNewAttributeValue(this.state.kindred.weightmod,false).value;
    var ht = this.getNewAttributeValue(this.state.kindred.heightmod,false).value;
    console.log("new wt + ht:" + wt + " " + ht); 
    this.setState( {attributes: newattributes, weight: wt, height: ht } );
  } 
  genderChange(value){
    this.setState({gender: value});
  }
  classChange(value){
    this.setState({class: value});
  }
  nameChange(value){
    this.setState({name: value});
  }
  kindredChange(value){
    for(var i = 0; i < this.props.kindredlist.length; i++) {
      // eslint-disable-next-line
      if(value == this.props.kindredlist[i].id){
        console.log(this.props.kindredlist[i]);
        this.setState({kindred: this.props.kindredlist[i]});
      }
    }
  }
  render(){
    return (
      <div className="CharacterBox">
        <span onClick={this.handleRerollClick}>Reroll</span>
        <CharacterName name={this.state.name}
            onChange={this.nameChange} />
        <CharacterClass 
            value={this.state.class}
            onChange={this.classChange} />
        <CharacterGender
            value={this.state.gender}
            onChange={this.genderChange} />
        <CharacterKindred kindredoptions={this.props.kindredlist}
            value={this.state.kindred.id}
            onChange={this.kindredChange} />
        <CharacterLevel attr={this.state.attributes} kindred={this.state.kindred}/>
        <CharacterWeight kindred={this.state.kindred} 
                         weight={this.state.weight} 
                         height={this.state.height}/>
        <CharacterHeight kindred={this.state.kindred}
                         height={this.state.height} />
        <AttributeBox attr={this.state.attributes} kindred={this.state.kindred}/>
      </div>
    );
  }
}

export default CharacterBox;

class CharacterGender extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
    <div className="CharacterGender">
        <label>Gender: </label>
        <select onChange={this.onChange} value={this.props.value}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
    </div>
    );
  }
}

class CharacterClass extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
    <div className="CharacterClass">
        <label>Class: </label>
        <select onChange={this.onChange} value={this.props.value}>
          <option value="Warrior">Warrior</option>
          <option value="Wizard">Wizard</option>
          <option value="Rogue">Rogue</option>
        </select>
    </div>
    );
  }
}

class CharacterHeight extends React.Component {
  render(){
    var heightInCm = Math.round(
       (126.4 + (this.props.height*5.6)) * this.props.kindred.heightmod
                               );
    return (
      <div>
        Height: {heightInCm} cm
      </div>
    );
  }
}

class CharacterWeight extends React.Component {
  render(){
    var heightInCm = 126.4 + (this.props.height*5.6);
    // ideal weight for male uses devine formula
    var idealWeightKg = Math.round(
          (50 + (0.9055118 * (heightInCm-152.4))) * this.props.kindred.weightmod
                           );
    return (
      <div>
        Weight: {idealWeightKg} kg
      </div>
    );
  }
}

class CharacterKindred extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
      <div className="CharacterKindred">
        <label>Kindred: </label>
        <select onChange={this.onChange} value={this.props.value}>
          {this.props.kindredoptions.map(function(kin,key){
            return <option key={key} value={kin.id}>{kin.name}</option>
          })}
        </select>
      </div>
    );
  }
}

class CharacterName extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
      <div>
        Name: <input onChange={this.onChange} type="text" value={this.props.name}/>
      </div>
    );
  }
}

class AttributeBox extends React.Component {
  render(){
    return (
      <div className="AttributeBox">
        <Attribute name="STR" data={this.props.attr.str} kmod={this.props.kindred.strmod}/>
        <Attribute name="CON" data={this.props.attr.con} kmod={this.props.kindred.conmod}/>
        <Attribute name="DEX" data={this.props.attr.dex} kmod={this.props.kindred.dexmod}/>
        <Attribute name="SPD" data={this.props.attr.spd} kmod={this.props.kindred.spdmod}/>
        <Attribute name="LK" data={this.props.attr.lk} kmod={this.props.kindred.lkmod}/>
        <Attribute name="IQ" data={this.props.attr.iq} kmod={this.props.kindred.iqmod}/>
        <Attribute name="WIZ" data={this.props.attr.wiz} kmod={this.props.kindred.wizmod}/>
        <Attribute name="CHR" data={this.props.attr.chr} kmod={this.props.kindred.chrmod}/>
        <PersonalAdds attr={this.props.attr} kindred={this.props.kindred} />
      </div>
    );
  }
}

class Attribute extends React.Component {
  render(){
    var total = this.props.data.reduce(
      function(previousValue, currentValue, currentIndex, array) {
	return previousValue + currentValue;
      });
    if(this.props.kmod > 1){
      total = Math.floor(total * this.props.kmod);
    } else {
      total = Math.ceil(total * this.props.kmod);
    }
    return (
      <div className="Attribute">
        <span className="name">{this.props.name}</span><span className="total">{total}</span>
      </div>
    );
  }
}

Attribute.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    kmod: React.PropTypes.number.isRequired
}

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
      <div className="PersonalAdds">
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
      <div className="CharacterLevel">
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