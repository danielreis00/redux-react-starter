import { fromJS } from 'immutable';

export const getInitialState = () => fromJS(
  {
    dummy: {
      date: []
    }
  }
);
