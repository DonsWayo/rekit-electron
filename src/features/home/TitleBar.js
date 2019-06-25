import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class TitleBar extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };


  render() {
    return (
      <header className="home-title-bar" onDoubleClick={this.handleDoubleClick}>
        <span className="title-container">
          <span className="project-name">Rekit Electron</span>
        </span>
      </header>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    studios: state.home.studios,
    studioById: state.home.studioById,
    router: state.router,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleBar);
