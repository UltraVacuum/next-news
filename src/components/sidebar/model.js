import { takeLatest, put, select } from "redux-saga/effects";

import { FETCH_NEWS_START } from "@/pages/home/model";

export const [CHANGE_CATEGORY, CHANGE_CATEGORY_DONE] = [
  "CHANGE_CATEGORY",
  "CHANGE_CATEGORY_DONE"
];

export function category(state = "all", action) {
  if (action.type === CHANGE_CATEGORY_DONE) {
    return action.payload;
  }
  return state;
}

const getQueryParams = state => ({
  language: state.language,
  category: state.category
});

function* changeCategory(action) {
  yield put({
    type: CHANGE_CATEGORY_DONE,
    payload: action.payload
  });

  const { category, language } = yield select(getQueryParams);
  const query = {
    sources: "",
    q: "",
    category,
    language,
    country: ""
  };

  console.log("change category query ===>", query);

  yield put({
    type: FETCH_NEWS_START,
    payload: query
  });
}

export default function* userChangeCategory() {
  yield takeLatest(CHANGE_CATEGORY, changeCategory);
}
