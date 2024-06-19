import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
