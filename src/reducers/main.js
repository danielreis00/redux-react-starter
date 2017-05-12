import { getInitialState } from '../utils/initialState';
import * as types from '../constants/actionsTypes';

const initialState = getInitialState();

export const reducer = function (state = initialState, action = 'DEFAULT') {
  switch (action.type) {
    case types.DO_DUMMY_SUCCESS:
      return state.mergeDeep({ dummy: action.payload });
    default:
      return state;
  }
};

export default reducer;
