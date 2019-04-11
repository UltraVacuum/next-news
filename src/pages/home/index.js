import React, { Component } from "react";
import { connect } from "react-redux";

import NewsLayout from "@/pages/layout/news";
import CategoryNav from "@/components/sidebar";
import NewsCard from "@/components/news-card";
import { LineScale } from "@/components/loader";
import InfiniteLoad from "@/utils/infinite-load";

import EmptyNews from "./empty-news";

import { FETCH_NEWS_START, FETCH_CONCAT_NEWS_START } from "./model";

class Home extends Component {
  constructor(props) {
    super();
    this.state = { page: 1, pageSize: 20 };
  }

  fetchNews() {
    const { language = "en", category = "", dispatch } = this.props;
    const { pageSize, page } = this.state;

    const query = {
      sources: "",
      q: "",
      category,
      language,
      country: "",
      page,
      pageSize
    };

    dispatch({
      type: FETCH_NEWS_START,
      payload: query,
      callback: this.updatePage.bind(this)
    });
  }
  concatNews() {
    const { language = "en", category = "", dispatch } = this.props;
    const { pageSize, page } = this.state;

    const query = {
      sources: "",
      q: "",
      category,
      language,
      country: "",
      page,
      pageSize
    };

    dispatch({
      type: FETCH_CONCAT_NEWS_START,
      payload: query,
      callback: this.updatePage.bind(this)
    });
  }

  updatePage() {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
  }

  componentDidMount() {
    this.fetchNews();
  }

  loadMore() {
    this.concatNews();
  }

  renderArticleList(articles) {
    return (
      <div>
        {articles.map((item, index) => {
          return <NewsCard item={item} key={index} />;
        })}
        <InfiniteLoad onVisited={() => this.loadMore()} />
      </div>
    );
  }

  render() {
    const {
      newsArticle: { articles, isFetching }
    } = this.props;

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
                  <LineScale className="container">
                    <p className="text-primary">Loading...</p>
                  </LineScale>
                ) : articles.length > 0 ? (
                  this.renderArticleList(articles)
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
