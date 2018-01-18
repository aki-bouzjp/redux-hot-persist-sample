
import React from 'react';
import { combineReducers } from 'redux';

import {
  ACTION_TYPE,
} from './action.jsx';



const initialState = {
  test : 0,
};



const handlers = {
  [ACTION_TYPE.TEST](state, action) {
    return Object.assign({}, state, {
      test : state.test + 1,
    });
  }
}



export default (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
