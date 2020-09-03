import React from "react";
import Item from "./Item";

const ItemListPresenter = (props) => {
  console.log("prop", props);
  return (
    <div>
      <p>PResenter</p>
      {props.productList.map((item) => {
        return <Item product={item} />;
      })}
    </div>
  );
};

export default ItemListPresenter;
