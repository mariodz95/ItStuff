import React, { Component } from "react";
import { ProductDetailPresenter } from "./ProductDetailPresenter";
import { connect } from "react-redux";
import { getProduct } from "../productActions";
import PropTypes from "prop-types";

let image;
let index = 0;

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    image =
      this.props.location.satate !== undefined
        ? this.props.location.state.product.images[index]
        : props.newProduct.image;
    let length =
      this.props.location.state !== undefined
        ? this.props.location.state.product.images.length
        : null;
    this.state = {
      displayImage: { image },
      imagesLength: length,
      displayBack: false,
      displayNext: length !== null && length !== 1 ? true : false,
    };
  }

  componentDidMount() {
    this.props.getProduct(this.props.newProduct.id);
  }

  controlImage = (e) => {
    if (e === 1) {
      index += 1;
      image = this.props.location.state.product.images[index];
      this.setState({ displayImage: { image } });
      this.setState({ displayBack: true });
    }

    if (e === -1) {
      index -= 1;
      image = this.props.location.state.product.images[index];
      this.setState({ displayImage: { image } });
      this.setState({ displayNext: true });
    }

    if (index === this.props.location.state.product.images.length - 1) {
      this.setState({ displayNext: false });
    }
    if (index === 0) {
      this.setState({ displayBack: false });
    }
  };

  render() {
    return (
      <div>
        <ProductDetailPresenter
          product={
            this.props.location.state !== undefined
              ? this.props.location.state.product
              : this.props.product
          }
          displayBack={this.state.displayBack}
          displayNext={this.state.displayNext}
          imagesLength={this.state.imagesLength}
          displayImage={this.state.displayImage}
          controlImage={this.controlImage}
          startIndex={this.state.startIndex}
          endIndex={this.state.endIndex}
        />
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
