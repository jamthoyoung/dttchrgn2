import { connect } from 'react-redux';
import Gold from '../component/Gold.js';

const mapStateToProps = (store) => {
 return {
  gold: store.character.gold
 };
}

export default connect(mapStateToProps)(Gold);
