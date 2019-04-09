import React, { Component } from "react";
import { connect } from "react-redux";

import NewsLayout from "@/pages/layout/news";

import CategoryNav from "../../components/sidebar";
import NewsCard from "../../components/news-card";

import { queryNews } from "@/api";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      topHeadlines: []
    };
  }

  async fetchNews() {
    const { language = "en", category = "" } = this.props;

    const defaultQuery = {
      sources: "",
      q: "",
      category,
      language,
      country: ""
    };

    // if (params.query) {
    //   Object.assign(defaultQuery, params.query);
    // }

    const resp = await queryNews(defaultQuery);
    if (resp.status === "ok")
      this.setState({
        topHeadlines: resp.articles
      });
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentWillReceiveProps(next, prev) {
    if (next.language !== prev.language || next.category !== prev.category) {
      this.fetchNews();
    }
  }

  render() {
    const { topHeadlines } = this.state;
    return (
      <NewsLayout>
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
      </NewsLayout>
    );
  }
}

const mapState = state => {
  return {
    language: state.language,
    category: state.category
  };
};

export default connect(mapState)(Home);
