import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import * as CharacterActions from './actions/CharacterActions';
import { PageHeader } from 'react-bootstrap';
import CharacterBox from './component/CharacterBox';

class App extends Component {
  render() {
    const { character, actions } = this.props;
    return (
      <div>
        <PageHeader>
          dttchrgen2
        </PageHeader>
        <CharacterBox 
           character={character}
           actions={actions}
           initFormData={this.props.initFormData} 
           backstory={this.props.backstory} 
           kindredlist={this.props.kindredlist}/>
      </div>
    );
  }
}

App.propTyes = {
 character: PropTypes.object.isRequired,
 actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  character: state.character
 };
}

function mapDispatchToProps(dispatch) {
 return {
  actions: bindActionCreators(CharacterActions, dispatch)
 };
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(App);

