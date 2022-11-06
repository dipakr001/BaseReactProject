import React, { useState } from 'react';
import { QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.scss';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

function BuildQuery() {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [
      {
        field: 'firstName',
        operator: '=',
        value: 'Steve',
      },
      {
        field: 'lastName',
        operator: '=',
        value: 'Vai',
      },
    ],
  });

  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={(q) => setQuery(q)}
    />
  );
}

export default BuildQuery;
