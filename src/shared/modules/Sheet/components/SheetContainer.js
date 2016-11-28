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
    search: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.any,
  };

  componentWillMount() {
    this.props.fetchSheet(this.props.params.sheet_id);
  }

  render() {
    const {
      title,
      entries,
      search,
      loading,
      error,
    } = this.props;

    if (loading || !title) {
      return (
        <div>
          Loading
        </div>
      );
    } else if (error) {
      return (
        <div>
          {error}
        </div>
      );
    }

    return (
      <Sheet
        title={title}
        entries={entries}
        search={search}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetContainer);
