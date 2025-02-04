import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import Select from "./Select";
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

SortBy.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired, // Each option must have a `value` as a string.
      label: PropTypes.string.isRequired, // Each option must have a `label` as a string.
    })
  ).isRequired, // Ensures `options` is a required array of objects.
};
export default SortBy;
