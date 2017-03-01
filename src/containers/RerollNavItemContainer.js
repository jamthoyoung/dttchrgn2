import { connect } from 'react-redux';
import RerollNavItem from '../component/Reroll.js';
import { rerollDice } from '../actions';

const mapDispatchToProps = (dispatch) => {
 return {
  rerollDiceLink: () => {
   dispatch(rerollDice());
  }
 }
}

export default connect(
  null,
  mapDispatchToProps
)(RerollNavItem);
