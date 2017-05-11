import { getInitialState } from '../utils/InitialState';

const initialState = getInitialState();

export const reducer = function (state = initialState, action = 'DEFAULT') {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
