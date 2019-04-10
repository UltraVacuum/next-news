import React, { Component } from "react";
import { connect } from "react-redux";

import NewsLayout from "@/pages/layout/news";

import CategoryNav from "@/components/sidebar";
import NewsCard from "@/components/news-card";
import Loader from "@/components/loader";
import EmptyNews from "./empty-news";

import { FETCH_NEWS_START } from "./model";

class Home extends Component {
  constructor(props) {
    super();
  }

  fetchNews() {
    const { language = "en", category = "", dispatch } = this.props;

    const query = {
      sources: "",
      q: "",
      category,
      language,
      country: ""
    };

    dispatch({
      type: FETCH_NEWS_START,
      payload: query
    });
  }

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    const {
      newsArticle: { articles, isFetching }
    } = this.props;

    console.log(this.props.newsArticle);

    return (
      <NewsLayout>
        <main className="container">
          <div className="container-fluid news-container">
            <div className="row">
              <div className="col-md-2">
                <CategoryNav />
              </div>
              <div className="col-md-10">
                {isFetching ? (
                  <Loader />
                ) : articles.length > 0 ? (
                  articles.map((item, index) => {
                    return <NewsCard item={item} key={index} />;
                  })
                ) : (
                  <EmptyNews />
                )}
              </div>
            </div>
          </div>
        </main>
      </NewsLayout>
    );
  }
}

const mapState = state => {
  return {
    language: state.language,
    category: state.category,
    newsArticle: state.newsArticle
  };
};

export default connect(mapState)(Home);
