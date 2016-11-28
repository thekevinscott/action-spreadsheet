import { bindActionCreators } from 'redux';

import {
  fetchSheet,
  search,
} from './actions';

import {
  FIELDS,
} from './components/Search';

const parseText = text => {
  return text.split(' ').join('').toLowerCase().replace(/[^\w\s]/gi, '');
};

const filterEntries = (entries = [], params = {}) => {
  return entries.filter(entry => {
    return FIELDS.map(field => field.name).reduce((bool, key) => {
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

const getFilters = (entries = []) => {
  const FILTERS = [
    'action',
    'socialissue',
    'level',
  ];

  return FILTERS.reduce((obj, filter) => ({
    ...obj,
    [filter]: Object.keys(entries.reduce((filterObj, entry) => ({
      ...filterObj,
      [entry[filter]]: true,
    }), {})),
  }), {});
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
    filters: getFilters(entries),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchSheet: bindActionCreators(fetchSheet, dispatch),
    search: bindActionCreators(search, dispatch),
  };
}

