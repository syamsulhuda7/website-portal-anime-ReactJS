import React from "react";
import { Spinner } from "react-bootstrap";

export default class LoadingSpinner extends React.Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
}
