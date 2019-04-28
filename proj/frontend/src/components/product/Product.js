import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";

export class Product extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  ComponentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <Fragment>
        <h2>Products</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>description</th>
              <th>created_at</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(products => (
              <tr key={products.name}>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>{products.description}</td>
                <td>{products.created_at}</td>
                <td>
                  <button className="btn btn-danger btn-sm"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Product);
