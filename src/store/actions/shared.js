import API from 'goals-todos-api'
import {RECEIVE_DATA} from "../actionTypes.js";

const receiveData = (todos, goals) => ({
  type: RECEIVE_DATA,
  todos,
  goals,
});

export const handleInitialData = () => (dispatch) => {
  return Promise.all([
    API.fetchTodos(),
    API.fetchGoals()
  ]).then(([todos, goals]) => {
    dispatch(receiveData(todos, goals))
  })
};