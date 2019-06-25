import initialState from './initialState';
import { reducer as getInitialStateReducer } from './getInitialState';
import { reducer as getMainStateReducer } from './getMainState';

const reducers = [
  getInitialStateReducer,
  getMainStateReducer,
];

export default function reducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    // Handle cross-topic actions here
    case 'CREATE_APP_STATUS':
      break;
    case 'CREATE_APP_SUCCESS':
      break;
    case 'CREATE_APP_FAILURE':
      break;
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
