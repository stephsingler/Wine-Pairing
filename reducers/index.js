import { combineReducers } from 'redux';

export const redWine = (state = [], action) => {
  if(action.type === "GET_RED_WINE") {
    return action.payload;
  }
  return state;
};

export const whiteWine = (state = [], action) => {
  if(action.type === "GET_WHITE_WINE") {
    return action.payload;
  }
  return state;
};

export const cheeseList = (state = [], action) => {
  if(action.type === "GET_CHEESE-LIST") {
    return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  redWine, whiteWine, cheeseList
});
export default allReducers;
