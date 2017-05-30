import { combineReducers } from 'redux';

const initialStateUsers = {
  currentUser: null
};

const usersReducer = (state = initialStateUsers, action) => {
  debugger
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return {...state,currentUser: action.payload};
      break;
    default: return state;
  }
};

const rootReducer = combineReducers({
  usersReducer
});

export default rootReducer;
