import React, { Fragment } from "react";
import Form from "./Form";
import Products from "./Products";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Products />
    </Fragment>
  );
}
