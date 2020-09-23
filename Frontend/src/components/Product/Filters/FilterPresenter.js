import React from "react";
import "./filter.css";

const FilterPresenter = (props) => {
  return (
    <React.Fragment>
      <h1 className="filter">Filters</h1>
      <form className="filter" onSubmit={props.handleSubmit}>
        <label>
          Price:
          <br />
          <input
            name="fromPrice"
            type="number"
            className="form"
            value={props.fromPrice}
            onChange={props.handleChange}
          />
          TO
          <input
            name="toPrice"
            type="number"
            className="form"
            value={props.toPrice}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Search" />
      </form>
    </React.Fragment>
  );
};

export default FilterPresenter;
