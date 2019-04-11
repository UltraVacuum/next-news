import { takeLatest, put } from "redux-saga/effects";
import { queryNewsArticles } from "@/store/utils";

// action pattern
export const [CHANGE_CATEGORY, CHANGE_CATEGORY_DONE] = [
  "CHANGE_CATEGORY",
  "CHANGE_CATEGORY_DONE"
];

// reducer
export function category(state = "all", action) {
  if (action.type === CHANGE_CATEGORY_DONE) {
    return action.payload;
  }
  return state;
}

// action effects
function* changeCategory(action) {
  yield put({
    type: CHANGE_CATEGORY_DONE,
    payload: action.payload
  });

  yield queryNewsArticles();
}

// watch flow
export default function* userChangeCategory() {
  yield takeLatest(CHANGE_CATEGORY, changeCategory);
}
