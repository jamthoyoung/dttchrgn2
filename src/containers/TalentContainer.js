import { connect } from 'react-redux';
import Talents from '../component/TalentsMultiselect.js';
import { selectTalents } from '../actions';

const mapStateToProps = (store) => {
 return {
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
