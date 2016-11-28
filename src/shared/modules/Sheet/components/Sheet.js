import React from 'react';
import Entry from './Entry';
import Search from './Search';
import {
  Jumbotron,
} from 'react-bootstrap';

export default function Sheet({
  title,
  entries,
  search,
}: {
  title: string,
  entries: any,
  search: any,
}) {
  return (
    <div>
      <Jumbotron>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </Jumbotron>
      <div className="container">
        <Search
          onChange={search}
        />
        {entries.map((entry, key) => (
          <Entry
            key={key}
            {...entry}
          />
        ))}
      </div>
    </div>
  );
}
