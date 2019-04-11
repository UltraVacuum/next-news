import { select, put } from "redux-saga/effects";
import { FETCH_NEWS_START } from "@/pages/home/model";

export const getQueryParams = state => ({
  language: state.language,
  category: state.category
});

export function* queryNewsArticles() {
  const { category, language } = yield select(getQueryParams);
  const query = {
    category,
    language
  };

  console.log("change options query ===>", query);

  yield put({
    type: FETCH_NEWS_START,
    payload: query
  });
}
