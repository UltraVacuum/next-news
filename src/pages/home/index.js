import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import CategoryNav from "../../components/sidebar";
import NewsCard from "../../components/news-card";

import { queryNews } from "../../api";

function Index({ topHeadlines, language }) {
  return (
    <div>
      <Header language={language} />
      <main className="container">
        <div className="container-fluid news-container">
          <div className="row">
            <div className="col-md-2">
              <CategoryNav />
            </div>
            <div className="col-md-10">
              {topHeadlines.length === 0 ? (
                <div className="text-info">loading news...</div>
              ) : (
                topHeadlines.map((item, index) => {
                  return <NewsCard item={item} key={index} />;
                })
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

Index.getInitialProps = async params => {
  const defaultQuery = {
    sources: "",
    q: "",
    category: "",
    language: "en",
    country: ""
  };

  if (params.query) {
    Object.assign(defaultQuery, params.query);
  }
  console.log("query params ==>", defaultQuery);
  const resp = await queryNews(defaultQuery);
  const defaultProps = { topHeadlines: [], language: defaultQuery.language };
  if (resp.status === "ok")
    Object.assign(defaultProps, { topHeadlines: resp.articles });
  return defaultProps;
};

Index.defaultProps = { topHeadlines: [], language: "en" };

export default Index;
