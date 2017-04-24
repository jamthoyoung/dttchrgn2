import { connect } from 'react-redux';
import Talents from '../component/Talents.js';
import { selectRogueTalents } from '../actions';
import { getLevel } from '../util/character.js';

const mapStateToProps = (store) => {
 let totalTalents = store.character.class === "Rogue" ? Math.floor(getLevel(store.character.attributes, store.kindredlist.byId[store.character.kindred])/2) : 0;
 return {
  numTalents: totalTalents,
  groupArray: store.talentlist.rogueGroups,
  talentArray: store.talentlist.rogueIds,
  selectProps: { multiple: (totalTalents > 1), disabled: (store.character.class !== "Rogue" || totalTalents < 1) },
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
