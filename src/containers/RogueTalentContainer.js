import { connect } from 'react-redux';
import Talents from '../component/Talents.js';
import { selectRogueTalents } from '../actions';

const mapStateToProps = (store) => {
 return {
  groupArray: store.talentlist.rogueGroups,
  talentArray: store.talentlist.rogueIds,
  selectProps: { multiple: true },
  isMultiple: true,
  fieldlabel: 'Rogue Talents',
  talents: store.character.rogueTalents,
  talentlist: store.talentlist
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  selectTalents: (talentIds) => {
    console.log(talentIds);
   dispatch(selectRogueTalents(talentIds));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talents);
