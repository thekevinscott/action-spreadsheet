import React from 'react';
import {
  Jumbotron,
  Col,
  Row,
} from 'react-bootstrap';

export default function Sheet({
}) {
  return (
    <div>
      <Jumbotron>
        <div className="container">
          <h1>{this.props.title}</h1>
        </div>
      </Jumbotron>
      <div className="container">
        <Row>
          <h2>Search</h2>
          <Col md={12} sm={12}>
            Here is a search
          </Col>
        </Row>
      </div>
    </div>
  );
}
