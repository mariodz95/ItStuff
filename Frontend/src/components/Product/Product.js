import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "./productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  addItem = (values) => {
    console.log("values", values);
    this.props.createProduct(values, this.state.pictures);
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <ProductForm
        onDrop={this.onDrop}
        addItem={this.addItem}
        handleChange={this.handleChange}
      />
    );
  }
}

Product.propTypes = {
  createProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newProduct: state.products.newProduct,
});

const connectedProduct = connect(mapStateToProps, { createProduct })(Product);
export { connectedProduct as Product };
