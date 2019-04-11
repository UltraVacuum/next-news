// https://newsapi.org/v2/top-headlines?country=us&apiKey=688be414554e4d0eab509b7246901a85

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("688be414554e4d0eab509b7246901a85");

export const getTopHeadlines = params => {
  // const testUrl =
  //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=688be414554e4d0eab509b7246901a85";
  // return sRequest(testUrl, {
  //   methods: "GET"
  // });
  return newsapi.v2.topHeadlines({
    // sources: "bbc-news",
    // q: "bitcoin",
    // category: "business",
    language: "zh",
    country: "cn"
  });
};

export const queryNews = (params = { language: "en", country: "us" }) => {
  if (params.category === "all") params.category = "";
  return newsapi.v2.topHeadlines(params);
};
