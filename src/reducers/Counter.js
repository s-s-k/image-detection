import { INCREMENT, ZEROING } from '../constants/actionTypes';

import { handleActions } from 'redux-actions';

const initialState = {
  count: 0
};

export default handleActions({
  [INCREMENT]: (state) => {
    return Object.assign({}, state, {
      count: state.count + 1
    });
  },
  [ZEROING]: (state, action) => ({ count: 0 })
}, initialState);
