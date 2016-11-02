import { createAction } from 'redux-actions';

import { INCREMENT, ZEROING } from '../constants/actionTypes';

const increment = createAction(INCREMENT);
const zeroing = createAction(ZEROING);

export { increment, zeroing };
