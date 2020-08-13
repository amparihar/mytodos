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

function saveGroupsFail(errorMsg) {
  return { type: actionTypes.SAVE_GROUP_FAIL, errorMsg };
}

// thunks
export function requestGroups() {
  return (dispatch, getState) => {
    return todosApi.getGroups(getState().user.identity.accessToken).then(
      (groups) => dispatch(getGroupsSuccess(groups)),
      (err) => {
        dispatch(getGroupsFail(`Get groups request failed with error ${err}`));
      }
    );
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
    return todosApi
      .saveGroup(
        group.id ? group : { ...group, id: uuid() },
        getState().user.identity.accessToken
      )
      .then(
        (rsp) => {
          group.id
            ? dispatch(updateGroupSuccess(rsp))
            : dispatch(addGroupSuccess(rsp));
        },
        (err) =>
          dispatch(saveGroupsFail(`Save group request failed with error ${err}`))
      );
  };
}
