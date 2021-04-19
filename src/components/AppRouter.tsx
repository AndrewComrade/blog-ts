import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteNames, routes } from '~/routes';

const AppRouter: React.FC = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact
                />
            ))}
            <Redirect to={RouteNames.HOME_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
