import React from 'react';
import Entry from './Entry';

export default function Sheet({
  entries,
}: {
  entries: any,
}) {
  return (
    <div>
      {entries.map((entry, key) => (
        <Entry
          key={key}
          {...entry}
        />
      ))}
    </div>
  );
}
