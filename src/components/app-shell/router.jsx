import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const LoadingMessage = () => (
  "I'm loading..."
);

export const RouteWithSubRoutes = (route) => (
  <Suspense fallback={<LoadingMessage/>}>
    {route.path && route.component &&
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    }
    {(route.routes || []).map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </Suspense>
);
