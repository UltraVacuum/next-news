import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import LazyLoad from "@/utils/lazy-load";

import "./index.scss";

dayjs.extend(relativeTime);
const fromNow = tm => {
  return dayjs(tm).fromNow();
};

const CoverPlaceholder = ({ children }) => (
  <div className="news-img placeholder">{children}</div>
);

export default function NewsCard({ item }) {
  return (
    <a
      className="card card-news mb-4"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="card-img">
            <LazyLoad>
              <CoverPlaceholder>
                <div
                  className="news-img"
                  style={{
                    backgroundImage: `url(${item.urlToImage})`
                  }}
                />
              </CoverPlaceholder>
            </LazyLoad>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="news-title line-clamp-2">{item.title}</h5>
            <p className="news-brief  line-clamp-3">
              {item.description || "No Description."}
            </p>
            {/* <p className="news-content">{item.content}</p> */}
          </div>
        </div>
        <div className="col-md-2">
          <div className="card-body">
            <p className="news-source text-ellipsis">{item.source.name}</p>
            <p className="news-author text-ellipsis">{item.author}</p>
            <p className="news-time text-ellipsis">
              {/* <i className="iconfont icon-wodefabu mr-1" /> */}
              {fromNow(item.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
