import React from "react";
import ImageGallery from "../../../shared/ImageGallery";
import Container from "@material-ui/core/Container";
import Moment from "moment";

export const ProductDetailPresenter = (props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <h1>Product Detail's</h1>
        {props.product !== null ? (
          <React.Fragment>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price} $</p>
            <p>Location: {props.product.location}</p>
            <p>Category: {props.product.category}</p>
            <p>
              Date created:
              {Moment(props.product.dateCreated).format("DD/MM/YYYY")}
            </p>
            <p>Description: {props.product.description}</p>
            <ImageGallery
              images={props.product.images}
              controlImage={props.controlImage}
              displayImage={props.displayImage}
              imagesLength={props.imagesLength}
              displayBack={props.displayBack}
              displayNext={props.displayNext}
            ></ImageGallery>
          </React.Fragment>
        ) : null}
      </Container>
    </div>
  );
};
