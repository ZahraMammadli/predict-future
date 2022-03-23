import { Search } from "@material-ui/icons";
import "./SearchBar.css";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import { QUERY_SEARCH_PREDICTIONS } from "../../utils/queries";

export default function SearchBar() {
  const { data, loading, error } = useQuery(QUERY_SEARCH_PREDICTIONS, {});
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (payload) => {
    console.log(payload);
  };

  // if (loading) {
  //   return <div>loading</div>;
  // }

  // if (error) {
  //   return <div>rror</div>;
  // }

  return (
    <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-bar__input">
        <Search className="search-bar__searchIcon" />
        <input
          placeholder="Search"
          type="text"
          {...register("searchTerm", { required: true })}
        />
      </div>
      <button>Search</button>
    </form>
  );
}
