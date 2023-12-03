import React, { Suspense, lazy, FC } from "react";
import { Route, Switch } from "react-router-dom";
import ChangeLang from "components/layout/ChangeLang";

const Menu = lazy(() => import("pages/Menu"));
const Form = lazy(() => import("pages/Form"));
const Shape = lazy(() => import("pages/Shape"));

const AppRouter: FC = () => {
  return (
    <>
      <ChangeLang />
      <Suspense fallback={""}>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/shape" component={Shape} />
          <Route exact path="/*" component={Menu} />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
