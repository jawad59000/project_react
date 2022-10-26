import React from "react";
import { useContext } from "react";
import { UserContext } from "../utils/context";

const SearchForm = () => {
  const { value, setValue, data } = useContext(UserContext);

  return (
    <div className="searcher">
      <h1>Search your film</h1>
      <input
        type="text"
        className="search"
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          console.log(data);
        }}
      />
    </div>
  );
};

export default SearchForm;
