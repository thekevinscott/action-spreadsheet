import { bindActionCreators } from 'redux';

import {
  fetchSheet,
  search,
} from './actions';

const FIELDS_TO_SEARCH = [
  'title',
];

const parseText = text => {
  return text.split(' ').join('').toLowerCase().replace(/[^\w\s]/gi, '');
};

const filterEntries = (entries = [], params = {}) => {
  return entries.filter(entry => {
    return FIELDS_TO_SEARCH.reduce((bool, key) => {
      if (bool === false) {
        return false;
      }

      if (!params[key]) {
        return true;
      }

      return parseText(entry[key]).indexOf(parseText(params[key])) !== -1;
    }, true);
  });
};

export function mapStateToProps({ data, ui, form }, { params }) {
  const sheet = data.sheets[params.sheet_id] || {};

  const {
    loading,
    error,
    title,
    entries,
  } = sheet;

  return {
    loading,
    error,
    title,
    entries: filterEntries(entries, ui.search),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchSheet: bindActionCreators(fetchSheet, dispatch),
    search: bindActionCreators(search, dispatch),
  };
}

