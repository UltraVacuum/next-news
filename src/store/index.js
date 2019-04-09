import { createStore } from "redux";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguage = language => {
  return {
    type: CHANGE_LANGUAGE,
    payload: {
      language
    }
  };
};

function language(state = { language: "en" }, action) {
  if (action.type === CHANGE_LANGUAGE) {
    return Object.assign({}, state, { language: action.payload.language });
  }
  return state;
}

export default createStore(
  language,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
