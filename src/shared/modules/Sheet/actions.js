import fetch from '../../utils/fetch';
import {
  FETCH_SHEET,
  SEARCH,
} from './types';

const WORKSHEET_IDS = {
  'action-sheet': '1a565EvkOlMQlJgbHgRx4ToNPQ5fZodBhYmG0M-IlViU',
};

const getSheetPath = (worksheetId, type) => {
  const id = WORKSHEET_IDS[worksheetId] || worksheetId;
  return `/feeds/${type}/${id}/od6/public/values?alt=json`;
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

export function search(key, value) {
  return {
    type: SEARCH,
    key,
    value,
  };
}
