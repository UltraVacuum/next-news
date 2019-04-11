import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import logger from "redux-logger";

import { userFetchNews, userConcatNews, newsArticle } from "@/pages/home/model";
import userChangeCategory, { category } from "@/components/sidebar/model";
import userChangeLanguage, { language } from "@/components/header/model";

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
  yield all([
    fork(userFetchNews),
    fork(userConcatNews),
    fork(userChangeCategory),
    fork(userChangeLanguage)
  ]);
}

sagaMiddleware.run(rootSaga);
