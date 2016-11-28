import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from 'shared/redux/Container';
import { Home } from 'shared/modules/Home';
//import { Page } from 'shared/modules/Page';

export default () => {
  return (
    <Route
      path="/"
      component={Container}
    >
      <IndexRoute component={Home} />
    </Route>
  );
};
