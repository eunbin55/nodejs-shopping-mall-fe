import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div className="display-center">
      <Spinner animation="border" />
    </div>
  );
};
