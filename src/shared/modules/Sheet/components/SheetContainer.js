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
  };

  componentWillMount() {
    this.props.fetchSheet(this.props.params.sheet_id);
  }

  render() {
    return (
      <Sheet
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetContainer);
