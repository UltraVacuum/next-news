import { createStore, combineReducers } from "redux";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const changeLanguage = language => {
  return {
    type: CHANGE_LANGUAGE,
    payload: {
      language
    }
  };
};

export const changeCategory = category => {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      category
    }
  };
};

function language(state = "en", action) {
  if (action.type === CHANGE_LANGUAGE) {
    return action.payload.language;
    // return Object.assign({}, state, { language: action.payload.language });
  }
  return state;
}

function category(state = "", action) {
  if (action.type === CHANGE_CATEGORY) {
    return action.payload.category;
    // return Object.assign({}, state, { category: action.payload.category });
  }
  return state;
}

export default createStore(
  combineReducers({
    language,
    category
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
