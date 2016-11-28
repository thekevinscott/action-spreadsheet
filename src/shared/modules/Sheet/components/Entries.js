import React from 'react';
import Entry from './Entry';

const disclaimer = `This is an aggregated list of actions created to serve as
a starting point for your own investigation.
Not all links or organizations have been thoroughly vetted.
Please use your own discretion when taking action.`;

const contact = `This is a live list.
Please contact this email for more info.
`;

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
      <p>{disclaimer}</p>
      <p>{contact}</p>
    </div>
  );
}
