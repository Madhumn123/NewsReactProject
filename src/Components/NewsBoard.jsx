import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
   //
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {articles.map((element, index) => (
          <NewsItem
            key={index}
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;