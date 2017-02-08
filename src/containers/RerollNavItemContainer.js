import { connect } from 'react-redux';
import RerollNavItem from '../component/RerollNavItem.js';
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
