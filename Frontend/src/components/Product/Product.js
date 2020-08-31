import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "./productActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], selectedOption: null };
    this.onDrop = this.onDrop.bind(this);
  }

  addItem = (values) => {
    this.props.createProduct(
      values,
      this.state.pictures,
      this.state.selectedOption.name
    );
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

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
