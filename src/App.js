import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         <CharacterBox initFormData={this.props.initFormData} kindredlist={this.props.kindredlist}/>
        </p>
      </div>
    );
  }
}

export default App;

var CharacterBox = React.createClass({
  rollOneDice: function(){
    return Math.ceil(Math.random() * 6);
  },
  getMultipleDice: function (numberofdice, taro){
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
  },
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
  },
  getInitialState: function() {
      return this.props.initFormData; 
  },
  handleRerollClick: function() {
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
  }, 
  genderChange: function(value){
    this.setState({gender: value});
  },
  classChange: function(value){
    this.setState({class: value});
  },
  nameChange: function(value){
    this.setState({name: value});
  },
  kindredChange: function(value){
    for(var i = 0; i < this.props.kindredlist.length; i++) {
      if(value === this.props.kindredlist[i].id){
        console.log(this.props.kindredlist[i]);
        this.setState({kindred: this.props.kindredlist[i]});
      }
    }
  },
  render: function(){
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
});
var CharacterGender = React.createClass({
  onChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function(){
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
});
var CharacterClass = React.createClass({
  onChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function(){
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
});
var CharacterHeight = React.createClass({
  render: function(){
    var heightInCm = Math.round(
       (126.4 + (this.props.height*5.6)) * this.props.kindred.heightmod
                               );
    return (
      <div>
        Height: {heightInCm} cm
      </div>
    );
  }
});

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

var CharacterKindred = React.createClass({
  onChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function(){
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
});
var CharacterName = React.createClass({
  onChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function(){
    return (
      <div>
        Name: <input onChange={this.onChange} type="text" value={this.props.name}/>
      </div>
    );
  }
});
var AttributeBox = React.createClass({
  render: function(){
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
});
var Attribute = React.createClass({
  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    kmod: React.PropTypes.number.isRequired
  },
  render: function(){
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
});
var PersonalAdds = React.createClass({
  render: function(){
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
});
var CharacterLevel = React.createClass({
  render: function(){
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
});

//ReactDOM.render(
//  <CharacterBox data={x} kindredlist={kindredlist}/>,
//  document.getElementById('content')
//);
