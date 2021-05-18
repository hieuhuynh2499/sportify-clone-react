import React, { Fragment } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import routes from './routers'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((routeItem, index) => {
        const {
          layout: Layout = Fragment,
          component: Component,
          path,
          isAuthRoute,
          exact,
          ...rest
        } = routeItem
        // TODO Add Private routeRouteCustom = isAuthRoute ? PrivateRoute : Route
        const RouteCustom = isAuthRoute ? Route : Route
        return (
          <RouteCustom key={index.toString()} path={path} exact={exact}>
            <Layout>
              <Component {...rest} />
            </Layout>
          </RouteCustom>
        )
      })}
    </Switch>
  </BrowserRouter>
)

export default AppRouter