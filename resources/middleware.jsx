
import { routerMiddleware, push } from 'react-router-redux';
import { LOCATION_CHANGE } from 'react-router-redux';


export const clientMiddleware = store => next => action => {
  console.log('access middleware');
  return next(action);
};
