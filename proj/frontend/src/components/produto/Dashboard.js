import React, { Fragment } from "react";
import Form from "./Form";
import Produto from "./Produto";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Produto />
    </Fragment>
  );
}
