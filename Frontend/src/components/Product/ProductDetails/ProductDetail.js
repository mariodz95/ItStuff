import React, { Component } from "react";
import { ProductDetailPresenter } from "./ProductDetailPresenter";
import { connect } from "react-redux";
import { getProduct } from "../productActions";
import PropTypes from "prop-types";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.newProduct.id);
  }
  render() {
    return (
      <div>
        <ProductDetailPresenter product={this.props.product} />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  getProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newProduct: state.products.newProduct,
  product: state.products.product,
});

const connectedProductDetail = connect(mapStateToProps, { getProduct })(
  ProductDetail
);
export { connectedProductDetail as ProductDetail };
