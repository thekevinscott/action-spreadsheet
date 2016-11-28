import promiseMiddleware from './promise';
import fetchMiddleware from './fetch';
import thunk from 'redux-thunk';

const middlewares = [
  thunk,
  fetchMiddleware,
  promiseMiddleware,
];

export default middlewares;
