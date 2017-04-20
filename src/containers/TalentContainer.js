import { connect } from 'react-redux';
import Talents from '../component/Talents.js';
import { selectTalents } from '../actions';

const mapStateToProps = (store) => {
 return {
  groupArray: store.talentlist.allGroups,
  talentArray: store.talentlist.allIds,
  selectProps: { },
  isMultiple: false,
  fieldlabel: 'Talent',
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
