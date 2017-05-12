import * as types from '../constants/actionsTypes';
import { fromJS } from 'immutable';

export function doDummyRequest() {
  return {
    type: types.DO_DUMMY_REQUEST,
  };
}

export function doDummySuccess(payload) {
  return{
    type: types.DO_DUMMY_SUCCESS,
    payload,
  };
}

export function doDummyFailure(payload) {
  return{
    type: types.DO_DUMMY_FAILURE,
    payload,
  };
}

export function doDummy(random){
  return (dispatch) => {
    dispatch(doDummyRequest());

    return new Promise((resolve, reject) => {
                resolve(random);
               })
               .then(json => fromJS(json))
               .then(data => dispatch(doDummySuccess(data)))
               .catch(ex => dispatch(doDummyFailure(ex)));
   };
}
