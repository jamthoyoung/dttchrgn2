import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.onChange =  this.onChange.bind(this);
   this.getSelectValues = this.getSelectValues.bind(this);
   this.compareGroups = this.compareGroups.bind(this);
   this.compareTalents = this.compareTalents.bind(this);
   this.state = { showModal : false };
 }

  onChange(e){
    console.log("Talent.onChange() " + this.getSelectValues(e.target));
    this.props.selectTalents(this.getSelectValues(e.target));
  }
  // Return an array of the selected opion values
// select is an HTML select element
  getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

  compareTalents(a,b){
    if(this.props.talentlist.byId[a].name < this.props.talentlist.byId[b].name){
      return -1;
    } else if (this.props.talentlist.byId[a].name > this.props.talentlist.byId[b].name){
      return 1;
    } else {
      return 0;
    }
  }

  compareGroups(a,b){
    if(this.props.talentlist.groups[a].name < this.props.talentlist.groups[b].name){
      return -1;
    } else if (this.props.talentlist.groups[a].name > this.props.talentlist.groups[b].name){
      return 1;
    } else {
      return 0;
    }
  }


  render(){
    var opts = (
      this.props.groupArray.sort(this.compareGroups).map(function(gid,gi){
        return <optgroup label={this.props.talentlist.groups[gid].name} key={gi}>
          {
            this.props.talentlist.groups[gid].talentIds.sort(this.compareTalents).map(function(tid,id){
              let o = '';
              if(this.props.talentArray.includes(tid))
                o = <option label={this.props.talentlist.byId[tid].name} key={id}>{tid}</option>;
              return o;
            }, this)
          }
        </optgroup>
      },this)
    );
    return (
        <FormGroup controlId="formControlSelectTalents">
          <ControlLabel>{this.props.fieldlabel}</ControlLabel>
            <FormControl componentClass="select" {...this.props.selectProps} onChange={this.onChange} value={this.props.talents}>
                {opts}
            </FormControl>
        </FormGroup>
    );
  }
}

export default Talents;
