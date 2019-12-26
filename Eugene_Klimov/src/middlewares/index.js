import {apiMiddleware} from 'redux-api-middleware';
import botMiddleware from './botMiddleware';

export default [
  apiMiddleware,
  botMiddleware,
];
