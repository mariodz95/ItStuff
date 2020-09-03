import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAll } from "../productActions";
import ItemListPresenter from "../ListOfItems/ItemListPresenter";

class ItemList extends Component {
  componentDidMount() {
    this.props.getAll(1, 10, "PC's");
  }

  render() {
    return (
      <div>
        <ItemListPresenter productList={this.props.productList} />
      </div>
    );
  }
}

ItemList.propTypes = {
  getAll: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  console.log("statara", state),
  {
    productList: state.products.productList,
  }
);

const connectedItemListDetail = connect(mapStateToProps, { getAll })(ItemList);
export { connectedItemListDetail as ItemList };
