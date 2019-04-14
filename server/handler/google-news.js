const FeedParser = require("feedparser");
const request = require("request");

const feedUrl =
  "https://news.google.com/rss/search?q=apple&hl=zh-CN&gl=CN&ceid=CN:zh-Hans";
const feedparser = new FeedParser();

// const r = request.defaults({ proxy: "127.0.0.1:50344" });

request
  .get({
    url: feedUrl
    // proxy: "127.0.0.1:50344"
  })
  .on("response", function(res) {
    var stream = this; // `this` is `req`, which is a stream
    console.log(res);
    if (res.statusCode !== 200) {
      this.emit("error", new Error("Bad status code"));
    } else {
      stream.pipe(feedparser);
    }
  })
  .on("error", function(error) {
    // handle any request errors
    console.log(error);
  });

feedparser.on("error", function(error) {
  // always handle errors
  console.log("parser error", error);
});

feedparser.on("readable", function() {
  // This is where the action is!
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item;

  while ((item = stream.read())) {
    console.log(item);
  }
});
