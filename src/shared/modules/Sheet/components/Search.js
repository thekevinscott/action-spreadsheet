import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {
  Col,
  Row,
} from 'react-bootstrap';

export const FIELDS = [
  {
    name: 'action',
    label: 'Action',
    type: 'dropdown',
  },
  {
    name: 'socialissue',
    label: 'Social Issue',
    type: 'dropdown',
  },
  {
    name: 'type',
    label: 'Type',
    type: 'dropdown',
  },
  {
    name: 'level',
    label: 'Level',
    type: 'dropdown',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'notes',
    label: 'Notes',
  },
];

const getField = ({
  name,
  label,
  type,
}, onChange, filter = []) => field => {
  const change = e => {
    onChange(name, e.target.value);
  };
  if (type === 'dropdown') {
    return (
      <div className="field-container">
        <label htmlFor={name}>{label}</label>
        <select onChange={change}>
          <option></option>
          {filter.map(el => (
            <option key={el}>{el}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="field-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        {...field}
        onChange={change}
        placeholder={label}
      />
    </div>
  );
};

function Search({
  filters,
  onChange,
}: {
  filters: any,
  onChange: any,
}) {
  return (
    <Row>
      <Col
        md={12}
        sm={12}
        className="search"
      >
        <h2>Search</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {FIELDS.map(field => (
            <Field
              key={field.name}
              name={field.name}
              component={getField(field, onChange, filters[field.name])}
            />
          ))}
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
