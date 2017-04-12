import { connect } from 'react-redux';
import Talents from '../component/TalentsMultiselect.js';
import { selectTalents } from '../actions';

const mapStateToProps = (store) => {
 return {
  multiselectitems: [
     {label:'Group One',children:[{value:'1-One'},{value:'1-Two'},{value:'1-Three'},{value:'1-Four',label:'Four Label'}]},
     {label:'Group Two',children:[{value:'2-One'},{value:'2-Two'},{value:'2-Three'},{value:'2-Four',label:'Four Label'}]},
     {label:'Group Three',children:[{value:'3-One'},{value:'3-Two'},{value:'3-Three'},{value:'3-Four',label:'Four Label'}]}
   ],
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
