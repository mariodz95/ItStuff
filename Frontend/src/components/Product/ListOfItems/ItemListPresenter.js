import React from "react";
import Item from "./Item";

const ItemListPresenter = (props) => {
  return (
    <div>
      {props.productList.map((item) => {
        return <Item product={item} />;
      })}
    </div>
  );
};

export default ItemListPresenter;
