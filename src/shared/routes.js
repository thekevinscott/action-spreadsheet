import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './redux/Container';
import { Sheet } from './modules/Sheet';
//import { Page } from 'shared/modules/Page';

export default () => {
  return (
    <Route
      path="/"
      component={Container}
    >
      <IndexRoute component={Sheet} />
      <Route
        path="/:sheet_id"
        component={Sheet}
      />
    </Route>
  );
};
