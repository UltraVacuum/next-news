import { call, put, takeLatest } from "redux-saga/effects";
import { queryNews } from "@/api";

export const [
  FETCH_NEWS_START,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCC,
  FETCH_NEWS_FAIL
] = [
  "FETCH_NEWS_START",
  "FETCH_NEWS_PENDING",
  "FETCH_NEWS_SUCC",
  "FETCH_NEWS_FAIL"
];

// reducer
export function newsArticle(
  state = {
    isFetching: false,
    articles: []
  },
  action
) {
  switch (action.type) {
    case FETCH_NEWS_START:
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_NEWS_SUCC:
      return {
        articles: action.articles,
        isFetching: false
      };
    case FETCH_NEWS_FAIL:
      return {
        articles: [],
        msg: action.msg,
        isFetching: false
      };
    default:
      return state;
  }
}

function* fetchNews(action) {
  try {
    const resp = yield call(queryNews, action.payload);
    if (resp.status === "ok")
      yield put({
        type: FETCH_NEWS_SUCC,
        articles: resp.articles
      });
  } catch (e) {
    yield put({
      type: FETCH_NEWS_FAIL,
      msg: e
    });
  }
}

function* userFetchNews() {
  yield takeLatest(FETCH_NEWS_START, fetchNews);
}

export default userFetchNews;
