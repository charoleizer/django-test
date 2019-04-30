import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";

export class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <Fragment>
        <h2>Products</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Created_at</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(products => (
              <tr key={products.id}>
                <td>{products.id}</td>
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
)(Products);
