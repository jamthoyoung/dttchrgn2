import { connect } from 'react-redux';
import { getLevel } from '../util/character.js';
import Level from '../component/Level.js';

const mapStateToProps = (store) => {
 return {
  level: getLevel(store.character.attributes, store.kindredlist.byId[store.character.kindred])
 };
}

export default connect(mapStateToProps)(Level);
