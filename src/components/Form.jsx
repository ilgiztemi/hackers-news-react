import { useEffect } from "react";

const Form = ({
  url,
  setUrl,
  searchValue,
  setSearchValue,
  isLoading,
  setIsLoading
}) => {
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`${url}${searchValue}`);
    setIsLoading(true);
  };
  // console.log(url);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search hot news..."
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
