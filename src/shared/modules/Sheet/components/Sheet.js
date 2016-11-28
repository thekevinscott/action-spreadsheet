import React from 'react';
import Entries from './Entries';
import Search from './Search';
import {
  Jumbotron,
} from 'react-bootstrap';

export default function Sheet({
  title,
  entries,
  search,
  filters,
}: {
  title: string,
  entries: any,
  filters: any,
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
          filters={filters}
        />
        {entries.length ? (
          <Entries
            entries={entries}
          />
        ) : (
          <p>No entries found.</p>
        )}
      </div>
    </div>
  );
}
