import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAll } from "../productActions";
import ItemListPresenter from "../ListOfItems/ItemListPresenter";
import "./Items.scss";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import FilterPresenter from "../Filters/FilterPresenter";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      category: null,
      search: null,
      fromPrice: null,
      toPrice: null,
    };
  }
  componentDidMount() {
    this.setState({ category: this.props.location.state.category });
    this.setState({ search: this.props.location.state.search });

    if (this.props.location.state.category !== undefined) {
      this.props.getAll(1, 10, this.props.location.state.category, 0, 0);
    } else {
      this.props.getAll(
        1,
        10,
        "name: " + this.props.location.state.search,
        0,
        0
      );
    }
  }

  handlePagination = (e, value) => {
    this.props.getAll(value, 10, this.state.category, 0, 0);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    if (this.props.location.state.category !== undefined) {
      this.props.getAll(
        1,
        10,
        this.props.location.state.category,
        this.state.fromPrice,
        this.state.toPrice
      );
    } else {
      this.props.getAll(
        1,
        10,
        "name: " + this.props.location.state.search,
        this.state.fromPrice,
        this.state.toPrice
      );
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="items">
        {this.props.loading ? (
          <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <React.Fragment>
            <FilterPresenter
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              fromPrice={this.state.fromPrice}
              toPrice={this.state.toPrice}
            />
            <ItemListPresenter
              productList={this.props.productList}
              totalPages={this.props.totalPages}
              handlePagination={this.handlePagination}
              page={this.state.page}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  getAll: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productList: state.products.productList,
  totalPages: state.products.totalPages,
  loading: state.products.loading,
});

const connectedItemListDetail = connect(mapStateToProps, { getAll })(ItemList);
export { connectedItemListDetail as ItemList };
