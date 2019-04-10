import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import logger from "redux-logger";

import userFetchNews, { newsArticle } from "@/pages/home/model";
import userChangeCategory, { category } from "@/components/sidebar/model";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = language => {
  return {
    type: CHANGE_LANGUAGE,
    payload: {
      language
    }
  };
};

function language(state = "en", action) {
  if (action.type === CHANGE_LANGUAGE) {
    return action.payload.language;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    language,
    category,
    newsArticle
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware, logger))
);

function* rootSaga() {
  yield all([fork(userFetchNews), fork(userChangeCategory)]);
}

sagaMiddleware.run(rootSaga);
