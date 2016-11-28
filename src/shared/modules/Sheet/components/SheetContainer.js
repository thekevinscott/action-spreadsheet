import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sheet from './Sheet';

import {
  mapStateToProps,
  mapDispatchToProps,
} from '../selectors';

class SheetContainer extends Component {
  static propTypes = {
    params: PropTypes.any,
    fetchSheet: PropTypes.func,
    title: PropTypes.string,
    entries: PropTypes.array,
  };

  componentWillMount() {
    this.props.fetchSheet(this.props.params.sheet_id);
  }

  render() {
    if (!this.props.title) {
      return (
        <div>
          Loading
        </div>
      );
    }

    return (
      <Sheet
        title={this.props.title}
        entries={this.props.entries}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetContainer);
