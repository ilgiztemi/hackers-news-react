const NewsFeed = ({ news, setNews }) => {
  const handleDelete = (id) => {
    let newList = news.filter((item) => item.objectID !== id);
    setNews(newList);
  };
  return (
    <div>
      {news.map((el) => {
        return (
          <div key={el.objectID} className="underline">
            <h3>{el.title}</h3>
            <p>Author: {el.author}</p>
            <button onClick={() => handleDelete(el.objectID)} className="exit">
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default NewsFeed;
