import { bindActionCreators } from 'redux';

import {
  fetchSheet,
} from './actions';

export function mapStateToProps({ data }, { params }) {
  const sheet = data[params.sheet_id] || {};
  return {
    title: sheet.title,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchSheet: bindActionCreators(fetchSheet, dispatch),
  };
}

