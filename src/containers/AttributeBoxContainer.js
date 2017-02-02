import React from 'react';
import { connect } from 'react-redux';
import AttributeBox from '../component/AttributeBox.js';

const mapStateToProps = function(store) {
 return {
  attr: store.attributes,
  kindred: store.kindred
 };
}

export default connect(mapStateToProps)(AttributeBox);
