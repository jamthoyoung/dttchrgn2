import { connect } from 'react-redux';
import Class from '../component/Class.js';
import { selectClass } from '../actions';

const mapStateToProps = (store) => {
 return {
  gender: store.character.class,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (val) => {
   dispatch(selectClass(val));
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Class);
