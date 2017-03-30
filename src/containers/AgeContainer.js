import { connect } from 'react-redux';
import Age from '../component/Age.js';
import { updateAge } from '../actions';

const mapStateToProps = (store) => {
 return {
  name: store.character.age
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (age) => {
   dispatch(updateAge(age));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Age);