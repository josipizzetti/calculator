import {
  LAST_RESULT
} from '../actions/actionsType';

export const initialState = {
  result: ''
};

const operationsResult = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAST_RESULT: {
      return Object.assign({}, state, {
        result: payload
      });
    }
    default:
      return state;
  }
};

export default operationsResult;
