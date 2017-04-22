import { connect } from 'react-redux';
import Talents from '../component/Talents.js';
import { selectRogueTalents } from '../actions';
import { getLevel } from '../util/character.js';

const mapStateToProps = (store) => {
 return {
  numTalents: Math.floor(getLevel(store.character.attributes, store.kindredlist.byId[store.character.kindred])/2),
  groupArray: store.talentlist.rogueGroups,
  talentArray: store.talentlist.rogueIds,
  selectProps: { multiple: true },
  fieldlabel: 'Rogue Talents',
  talents: store.character.rogueTalents,
  talentlist: store.talentlist
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  selectTalents: (talentIds) => {
   dispatch(selectRogueTalents(talentIds));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talents);
