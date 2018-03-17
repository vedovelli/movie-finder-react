
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from './components/App'
import Movies from './components/MoviesContainer'

const markup = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </App>
  </BrowserRouter>
)

ReactDOM.render(markup, document.getElementById('app'))
