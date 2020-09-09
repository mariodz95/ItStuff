import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAll } from "../productActions";
import ItemListPresenter from "../ListOfItems/ItemListPresenter";
import "./Items.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: null, category: null };
  }
  componentDidMount() {
    let category = this.props.location.pathname;
    category = category.split("/").pop();
    this.setState({ category: category });
    this.props.getAll(1, 10, category);
  }

  handlePagination = (e, value) => {
    this.props.getAll(value, 10, this.state.category);
  };

  render() {
    return (
      <div className="items">
        <ItemListPresenter
          productList={this.props.productList}
          totalPages={this.props.totalPages}
          handlePagination={this.handlePagination}
          page={this.state.page}
        />
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
});

const connectedItemListDetail = connect(mapStateToProps, { getAll })(ItemList);
export { connectedItemListDetail as ItemList };
