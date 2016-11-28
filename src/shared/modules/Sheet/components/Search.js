import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {
  Col,
  Row,
} from 'react-bootstrap';

function Search({
  onChange,
}: {
  onChange: any,
}) {
  return (
    <Row className="search">
      <Col md={2} sm={12}>
        <h2>Search</h2>
      </Col>
      <Col md={10} sm={12}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Field
            name="title"
            component={title => (
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  {...title}
                  onChange={(e) => {
                    onChange('title', e.target.value);
                  }}
                  placeholder="Title"
                />
              </div>
            )}
          />
        </form>
      </Col>
    </Row>
  );
}

export default reduxForm({
  form: 'search',
})(connect(
  ({ form }) => ({
    initialValues: form.search,
  })
)(Search));
