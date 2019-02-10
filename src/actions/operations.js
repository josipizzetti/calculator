import {
  LAST_RESULT,
} from './actionsType';

export const lastOperationResult = (result) => (
  {
    type: LAST_RESULT,
    payload: result
  }
);
