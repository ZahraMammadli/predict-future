import { Search } from "@material-ui/icons";
import "./SearchBar.css";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SEARCH_PREDICTIONS } from "../../utils/mutations";
import { useState } from "react";

export default function SearchBar() {
  const [search, { loading, error }] = useMutation(SEARCH_PREDICTIONS);
  const { register, handleSubmit, control } = useForm();
  const [searchText, setSearchText] = useState("");
  const onSubmit = async (payload) => {
    console.log(payload);
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>rror</div>;
  }

  const searchPredictions = async () => {
    // Get the current search text

    console.log("Searchhing for ", searchText);
    const data = await search({
      variables: {
        searchString: searchText,
      },
    });

    console.log(data);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className="search-bar" onSubmit={searchPredictions}>
      <div className="search-bar__input">
        <Search className="search-bar__searchIcon" />
        <input
          placeholder="Search"
          type="text"
          {...register("searchTerm", { required: true })}
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <button>Search</button>
    </form>
  );
}
