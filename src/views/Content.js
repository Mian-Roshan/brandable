import React, { Suspense } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import routes from '../Routes/routes'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <React.Fragment className="c-main">
      <Router>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
            console.log(route);
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
              )
            })}
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  )
}

export default React.memo(Content)
