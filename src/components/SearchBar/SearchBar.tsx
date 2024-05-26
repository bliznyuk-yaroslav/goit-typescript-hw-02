import { Toaster, toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

type InputProps = {
  onSubmit: (query: string) => void;
};
const SearchBar: React.FC<InputProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchText = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    if (searchText.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(searchText);
    form.reset();
  };
  return (
    <header className={css.head}>
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <input
          className={css.textIn}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={css.btn}>
          <FaSearch className={css.btn} />
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={true} />
    </header>
  );
};
export default SearchBar;
