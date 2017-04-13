import { connect } from 'react-redux';
import Talents from '../component/TalentsMultiselect.js';
import { selectTalents } from '../actions';

const getGroups = (talentlist, chartalents) => {
  let result =  talentlist.allGroups.map(function(gid){
    var group = {};
    group.label = talentlist.groups[gid].name;
    group.children = talentlist.groups[gid].talentIds.map(function(id){
      var talent = {};
      talent.value = id;
      talent.label = talentlist.byId[id].name;
      if(chartalents.includes(id)){
        talent.selected = true;
      }
      return talent;
    });
    return group;
  });
  return result;
}

const mapStateToProps = (store) => {
 return {
  multiselectitems: getGroups(store.talentlist, store.character.talents),
  talents: store.character.talents,
  talentlist: store.talentlist
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  selectTalents: (talentIds) => {
    console.log(talentIds);
   dispatch(selectTalents(talentIds));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talents);
