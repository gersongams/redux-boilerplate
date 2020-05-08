import API from 'goals-todos-api'
import {ADD_GOAL, REMOVE_GOAL} from "../actionTypes.js";

const addGoal = goal => ({
  type: ADD_GOAL,
  goal,
});

const removeGoal = id => ({
  type: REMOVE_GOAL,
  id,
});

export const handleAddGoal = (name, cb) => (dispatch) => {
  return API.saveGoal(name)
    .then((goal) => {
      dispatch(addGoal(goal))
      cb()
    })
    .catch(() => alert('There was an error. Try again.'))
};

export const handleDeleteGoal = goal => (dispatch) => {
  dispatch(removeGoal(goal.id))

  return API.deleteGoal(goal.id)
    .catch(() => {
      dispatch(addGoal(goal))
      alert('An error occurred. Try again.')
    })
};