import { takeLatest, put } from "redux-saga/effects";
import { queryNewsArticles } from "@/store/utils";

export const [CHANGE_LANGUAGE, CHANGE_LANGUAGE_DONE] = [
  "CHANGE_LANGUAGE",
  "CHANGE_LANGUAGE_DONE"
];

// reducer
export function language(state = "en", action) {
  if (action.type === CHANGE_LANGUAGE_DONE) {
    return action.payload;
  }
  return state;
}

// action effects
function* changeLanguage(action) {
  yield put({
    type: CHANGE_LANGUAGE_DONE,
    payload: action.payload
  });
  yield queryNewsArticles();
}

// watch flow
export default function* userChangeLanguage() {
  yield takeLatest(CHANGE_LANGUAGE, changeLanguage);
}
