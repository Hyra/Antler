import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';

// import user from './user';
// import counter from './counter';
// import layout from './layout';
// import todos from './todos';
// import version from './version';
// import { selectedReddit, postsByReddit } from './reddit';

const rootReducer = combineReducers({
  version: '0.0.0',
  router : routerStateReducer
});

export default rootReducer;