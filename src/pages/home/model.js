import { call, put, takeLatest } from "redux-saga/effects";
import { queryNews } from "@/api";

export const [
  FETCH_NEWS_START,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCC,
  FETCH_NEWS_FAIL,
  FETCH_CONCAT_NEWS_START,
  FETCH_CONCAT_NEWS_PENDING,
  FETCH_CONCAT_NEWS_SUCC,
  FETCH_CONCAT_NEWS_FAIL
] = [
  "FETCH_NEWS_START",
  "FETCH_NEWS_PENDING",
  "FETCH_NEWS_SUCC",
  "FETCH_NEWS_FAIL",
  "FETCH_CONCAT_NEWS_START",
  "FETCH_CONCAT_NEWS_PENDING",
  "FETCH_CONCAT_NEWS_SUCC",
  "FETCH_CONCAT_NEWS_FAIL"
];

// fetch reducer
export function newsArticle(
  state = {
    isFetching: false,
    isConcatFetching: false,
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
        ...state,
        total: action.total,
        articles: action.articles,
        isFetching: false
      };
    case FETCH_NEWS_FAIL:
      return {
        ...state,
        articles: [],
        msg: action.msg,
        isFetching: false
      };
    case FETCH_CONCAT_NEWS_START:
    case FETCH_CONCAT_NEWS_PENDING:
      return {
        ...state,
        isConcatFetching: true
      };
    case FETCH_CONCAT_NEWS_SUCC:
      return {
        ...state,
        isConcatFetching: false,
        articles: [...state.articles, ...action.articles],
        total: action.total
      };
    case FETCH_CONCAT_NEWS_FAIL:
      return {
        ...state,
        isConcatFetching: false,
        msg: action.msg
      };
    default:
      return state;
  }
}

// fetch news
function* fetchNews(action) {
  try {
    const resp = yield call(queryNews, action.payload);
    if (resp.status === "ok") {
      yield put({
        type: FETCH_NEWS_SUCC,
        articles: resp.articles,
        total: resp.totalResults
      });
      if (action.callback) yield call(action.callback);
    }
  } catch (e) {
    yield put({
      type: FETCH_NEWS_FAIL,
      msg: e
    });
  }
}

// concat news
function* concatNews(action) {
  try {
    const resp = yield call(queryNews, action.payload);
    if (resp.status === "ok") {
      yield put({
        type: FETCH_CONCAT_NEWS_SUCC,
        articles: resp.articles,
        total: resp.totalResults
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_CONCAT_NEWS_FAIL,
      msg: e
    });
  }
}

export function* userFetchNews() {
  yield takeLatest(FETCH_NEWS_START, fetchNews);
}

export function* userConcatNews() {
  yield takeLatest(FETCH_CONCAT_NEWS_START, concatNews);
}

export default userFetchNews;
