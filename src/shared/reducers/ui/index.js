import typeToReducer from 'type-to-reducer';
import {
  SEARCH,
} from '../../modules/Sheet/types';

const initialState = {
  search: {},
};

export default typeToReducer({
  [SEARCH]: (state, { key, value }) => {
    return {
      ...state,
      search: {
        [key]: value,
      },
    };
  },
}, initialState);
