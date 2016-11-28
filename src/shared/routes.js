import React from 'react';
import { Route } from 'react-router';

import Container from './redux/Container';
import { Sheet } from './modules/Sheet';
//import { Page } from 'shared/modules/Page';

export default () => {
  return (
    <Route
      path="/"
      component={Container}
    >
      <Route
        path="/:sheet_id"
        component={Sheet}
      />
    </Route>
  );
};
