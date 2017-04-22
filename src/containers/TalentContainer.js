import { connect } from 'react-redux';
import Talents from '../component/Talents.js';
import { selectTalents } from '../actions';

const mapStateToProps = (store) => {
  let totalTalents = store.character.class === "Rogue" ? 2 : 1;
 return {
  numTalents: totalTalents,
  groupArray: store.talentlist.allGroups,
  talentArray: store.talentlist.allIds,
  selectProps: { multiple: totalTalents > 1 },
  fieldlabel: 'Talents',
  talents: store.character.talents,
  talentlist: store.talentlist
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  selectTalents: (talentIds) => {
   dispatch(selectTalents(talentIds));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talents);
