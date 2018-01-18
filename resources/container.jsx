
import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import {
  Link,
  Redirect,
} from 'react-router-dom';
import {
  translate,
} from 'react-i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Action from './action.jsx';



class Container extends Component {

  onClick() {
    this.props.actions.test();
  }

  render() {
    const a = this.props.actions;
    const r = this.props.reducers;
    const s = this.state;

    return (
      <div>
        <div>
          <button onClick={this.onClick.bind(this)}>ボタン</button>
          {r.test}
          {console.log(r)}
        </div>
      </div>
    )
  }
}



function mapStateToProps(state, ownProps) {
  return {
    reducers : Object.assign(
      state.Reducer,
    ),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : Object.assign(
      bindActionCreators(Action, dispatch),
    ),
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
