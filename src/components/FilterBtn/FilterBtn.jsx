import "./style.scss";
import FilterIcon from "./filters.svg";

const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <img src={FilterIcon} alt="" />
      Filters
    </button>
  );
};

export default FilterBtn;
