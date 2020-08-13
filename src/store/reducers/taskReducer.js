import produce from 'immer';
import { InitialState } from './initialState';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
  error: ''
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK_SUCCESS:
      return produce(state, draft => {
        draft.tasks.push({ ...action.task });
        draft.error = ''
      });
    case actionTypes.UPDATE_TASK_SUCCESS:
      return produce(state, draft => {
        for (let task of draft.tasks) {
          if (task.id === action.task.id) {
            task.name = action.task.name;
            task.isComplete = action.task.isComplete;
            break;
          }
        }
        draft.error = ''
      });
    default:
      return state;
  }
}

export default taskReducer;
