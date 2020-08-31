import React from "react";
import ImageGallery from "../../../shared/ImageGallery";
import DisplayImage from "../../DisplayImages/DisplayImages";

export const ProductDetailPresenter = (props) => {
  return (
    console.log("props presenter", props),
    (
      <div>
        <h1>Product Detail's</h1>

        {props.product !== null ? (
          <React.Fragment>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
            <p>Category: {props.product.category}</p>
            <p>Date Created: {props.product.dateCreated}</p>
            <p>Description: {props.product.description}</p>
            <ImageGallery images={props.product.images}></ImageGallery>
          </React.Fragment>
        ) : null}
      </div>
    )
  );
};
