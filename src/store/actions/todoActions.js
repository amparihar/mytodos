import * as actionTypes from './actionTypes';
import { v4 as uuid } from 'uuid';

import * as todosApi from '../../api/todosApi';

// Action Creators

function getGroupsSuccess(groups) {
  return { type: actionTypes.GET_GROUPS_SUCCESS, groups };
}

function getGroupsFail(errorMsg) {
  return { type: actionTypes.GET_GROUPS_FAIL, errorMsg };
}

function getTasksSuccess(tasks) {
  return { type: actionTypes.GET_TASKS_SUCCESS, tasks };
}

function addTaskSuccess(task) {
  return { type: actionTypes.ADD_TASK_SUCCESS, task };
}

function updateTaskSuccess(task) {
  return { type: actionTypes.UPDATE_TASK_SUCCESS, task };
}

function addGroupSuccess(group) {
  return { type: actionTypes.ADD_GROUP_SUCCESS, group };
}

function updateGroupSuccess(group) {
  return { type: actionTypes.UPDATE_GROUP_SUCCESS, group };
}

// thunks
export function requestGroups() {
  return (dispatch, getState) => {
    return todosApi
      .getGroups()
      .then(groups => dispatch(getGroupsSuccess(groups)), err => {
        dispatch(getGroupsFail('Api call failed.'))
      });
  };
}

export function requestSaveTask(task) {
  return (dispatch, getState) => {
    task.id
      ? dispatch(updateTaskSuccess(task))
      : dispatch(addTaskSuccess({ ...task, id: uuid() }));
  };
}

export function requestSaveGroup(group) {
  return (dispatch, getState) => {
    group.id
      ? dispatch(updateGroupSuccess(group))
      : dispatch(addGroupSuccess({ ...group, id: uuid() }));
  };
}
