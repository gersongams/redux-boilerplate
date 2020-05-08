import checker from './checker'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

const middlewares = [thunk, checker];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);

  middlewares.push(logger);
}


const middleware = applyMiddleware(...middlewares)

export default middleware;