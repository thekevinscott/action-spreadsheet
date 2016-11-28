import typeToReducer from 'type-to-reducer';

import {
  FETCH_SHEET,
} from '../../modules/Sheet/types';

const initialState = {};

const translateSheet = sheet => {
  return {
    loading: false,
    error: null,
    title: sheet.title.$t,
    entries: sheet.entry.map((entry, index) => {
      return Object.keys(entry).reduce((obj, column) => {
        if (column.indexOf('gsx$') !== -1) {
          return Object.assign({}, obj, {
            [column.split('gsx$').pop()]: entry[column].$t,
          });
        }

        return obj;
      }, { index });
    }).filter(row => {
      return row.action;
    //}).sort((a, b) => {
      //return a.index - b.index;
    }).sort((a, b) => {
      return a.value - b.value;
    }),
  };
};

export default typeToReducer({
  [FETCH_SHEET]: {
    PENDING: (state, { meta }) => {
      return {
        ...state,
        [meta.worksheetId]: {
          loading: true,
        },
      };
    },
    FULFILLED: (state, { meta, response }) => {
      return {
        ...state,
        [meta.worksheetId]: translateSheet(response.feed),
      };
    },
    REJECTED: (state, action) => {
      console.log('error', action);
      return {
        ...state,
        [action.meta.worksheetId]: {
          loading: false,
          error: 'There was an error',
        },
      };
    },
  },
}, initialState);

