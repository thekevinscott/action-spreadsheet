import fetch from 'shared/utils/fetch';
import {
  FETCH_SHEET,
} from './types';

const getSheetPath = (worksheetId, type) => {
  return `/feeds/${type}/${worksheetId}/od6/public/values?alt=json`;
};

export function fetchSheet(worksheetId) {
  return dispatch => {
    return dispatch({
      type: FETCH_SHEET,
      meta: {
        worksheetId,
      },
      fetch: fetch(getSheetPath(worksheetId, 'list')),
    }).catch(err => {
      console.log('err', err);
    });
  };
}
