import { combineReducers } from 'redux';

const initialStateUsers = {

};

const usersReducer = (state = initialStateUsers, action) => {
  return state;
};

const rootReducer = combineReducers({
  usersReducer
});

export default rootReducer;
