import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserProducts } from "../Product/productActions";
import ProfileSectionPresenter from "./ProfileSectionPresenter";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../shared/spinner";

class ProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserProducts(this.props.user.id, 1, 10);
  }

  handlePagination = (e, value) => {
    this.props.getUserProducts(this.props.user.id, value, 10);
  };

  render() {
    return (
      <div>
        <p>Hello {this.props.user.username}</p>
        {this.props.loading ? (
          <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={this.props.loading}
            />
          </div>
        ) : (
          <ProfileSectionPresenter
            productList={this.props.userProducts}
            totalPages={this.props.totalPages}
            handlePagination={this.handlePagination}
          />
        )}
      </div>
    );
  }
}

ProfileSection.propTypes = {
  getUserProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authentication.user,
  userProducts: state.products.userProductList,
  totalPages: state.products.totalPages,
  loading: state.products.loading,
});

const connectedProfileSection = connect(mapStateToProps, { getUserProducts })(
  ProfileSection
);
export { connectedProfileSection as ProfileSection };
