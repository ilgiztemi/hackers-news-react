import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import NewsFeed from "./components/NewsFeed";
import Loading from "./components/Loading";

const api = "https://hn.algolia.com/api/v1/search?query=";

export default function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [url, setUrl] = useState(api);

  const getData = (url) => {
    axios.get(url).then((data) => setNews(data.data.hits));
  };

  useEffect(() => {
    getData(url);
    console.log("useEfect2");
  }, [url]);

  return (
    <>
      <div className="container">
        <header>
          <h1>Hackers News</h1>
        </header>
        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          url={url}
          setUrl={setUrl}
        />
        {isLoading ? <Loading /> : <NewsFeed news={news} setNews={setNews} />}
      </div>
    </>
  );
}
