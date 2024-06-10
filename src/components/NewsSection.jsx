/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const fetchNews = async (setNews, setLoading, keyword) => {
  let url = `https://newsdata.io/api/1/news?apikey=pub_45839938692f176e3d72e4b67a8a6ffb22424&q=${keyword}&language=en&category=technology`;

  // fetch(url)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setLoading;
  //     setNews(data.results);
  //     setLoading(false);
  //   });
};

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [active, setActive] = useState("Latest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(setNews, setLoading, "latest");
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col lg:px-56 pt-20 lg:pt-0 pb-48">
          <div className="flex flex-wrap gap-3 mb-16 px-5 justify-center">
            {[
              "Latest",
              "Mobile",
              "Gadgets",
              "Virtual reality",
              "Artificial intelligence",
              "Computing",
            ].map((item, i) => (
              <button
                key={i}
                className={`cursor-pointer text-sm lg:text-base font-semibold py-1 px-2 lg:px-4 border border-gray-400 rounded-lg shadow ${
                  active == item
                    ? "bg-slate-200 text-gray-800 hover:bg-white/70"
                    : "bg-transparent text-gray-300 hover:bg-black/30"
                }`}
                onClick={async () => {
                  setActive(item);
                  setLoading(true);
                  await fetchNews(setNews, setLoading, item);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-xs self-center mb-6">Fetched 10 results</p>

          <div className="flex flex-wrap justify-center gap-16">
            {news.length > 0 ? (
              news.map((details) => (
                <a
                  key={details.article_id}
                  href={details.link}
                  className="max-w-sm rounded overflow-hidden shadow-lg shadow-slate-950"
                >
                  <img
                    className="w-full"
                    src={details.image_url}
                    alt="news_img"
                  />
                  <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2">{details.title}</h2>
                    <p className="text-gray-400 text-base line-clamp-[10]">
                      {details.description}
                    </p>
                    <p className="text-gray-700 text-sm mt-3">
                      {details.pubDate.split(" ").map((item, i) => (
                        <span key={i}>
                          {item} {i === 0 && "· "}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="px-6 pt-4 pb-2">
                    {details.keywords &&
                      (details.keywords.length > 4
                        ? details.keywords.slice(0, 3).map((keyword, i) => (
                            <span
                              key={i}
                              className="inline-block bg-zinc-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                            >
                              {keyword}
                            </span>
                          ))
                        : details.keywords.map((keyword, i) => (
                            <span
                              key={i}
                              className="inline-block bg-zinc-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                            >
                              {keyword}
                            </span>
                          )))}
                  </div>
                </a>
              ))
            ) : (
              <div>
                <h1>Something Went Wrong!</h1>
                <p>Cannot fetch news.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsSection;
