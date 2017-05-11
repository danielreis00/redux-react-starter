import * as types from '../constants/actionTypes';

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
