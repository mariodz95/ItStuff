import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAll } from "../productActions";
import ItemListPresenter from "../ListOfItems/ItemListPresenter";
import "./Items.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let category = this.props.location.pathname;
    category = category.split("/").pop();
    this.props.getAll(1, 10, category);
  }

  render() {
    return (
      <div className="items">
        <ItemListPresenter productList={this.props.productList} />
      </div>
    );
  }
}

ItemList.propTypes = {
  getAll: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productList: state.products.productList,
});

const connectedItemListDetail = connect(mapStateToProps, { getAll })(ItemList);
export { connectedItemListDetail as ItemList };
