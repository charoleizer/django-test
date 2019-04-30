import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, deleteProduct } from "../../actions/products";

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
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteProduct.bind(this, product.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
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
  { getProducts, deleteProduct }
)(Products);
