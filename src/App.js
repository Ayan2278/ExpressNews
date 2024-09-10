import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import './css/main.css';

const App = () => {
  const [articles, setArticles] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const topics = [
          "politics", "cricket", "football", "drama", "horror", "money", "profit", "celebrities"
        ]
        const randomNum = Math.floor(Math.random() * 8) + 1;
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?apiKey=3fb4436612c041138ba69fd416bae8de&q="+topics[randomNum]
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Nav />
      <div className="w-[100vw] flex justify-center ">
        <div className="flex flex-row flex-wrap w-[80vw] justify-center">
          {articles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
