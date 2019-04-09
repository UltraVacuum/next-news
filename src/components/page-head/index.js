import React from "react";

import Head from "next/head";

export default function SeoHeader() {
  return (
    <Head>
      <title>Next News</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="renderer" content="webkit" />
      <meta name="referrer" content="always" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="keyword" content="next-news hot-news recent-news news-hub" />
      <meta
        name="description"
        content="Next News is all the news comes next for you."
      />
      <meta property="og:url" content="http://nex-news.top" />
      <meta property="og:site_name" content="next-news" />
      <meta
        property="og:description"
        content="Next News is all the news comes next."
      />
      <meta
        property="og:image"
        content={require("../../static/images/newspaper.svg")}
      />
      <meta property="og:title" content="Next News" />
      <meta name="google-analytics" content="UA-136930312-2" />
      <link
        rel="fluid-icon"
        href={require("../../static/images/newspaper.svg")}
        title="Next-News"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={require("../../static/images/newspaper.svg")}
      />
    </Head>
  );
}
