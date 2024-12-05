import "./style.scss";
import searchIcon from "./star.svg";
import Link from "../Link/Link.jsx";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        <button className="searchbar__btn">
          <Link text="AnyWhere" />
        </button>
        <button className="searchbar__btn">
          <Link text="Any Week" />
        </button>
        <button className="searchbar__btn searchbar__btn--light">
          <Link text="Add guests" style="light" />
        </button>
      </div>
      <button className="searchbar__btn-search">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
