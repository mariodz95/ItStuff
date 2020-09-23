import React from "react";
import ItemListPresenter from "../Product/ListOfItems/ItemListPresenter";

const ProfileSectionPresenter = (props) => {
  return (
    <div>
      <ItemListPresenter
        productList={props.productList}
        totalPages={props.totalPages}
        handlePagination={props.handlePagination}
        profileSection={true}
      />
    </div>
  );
};

export default ProfileSectionPresenter;
