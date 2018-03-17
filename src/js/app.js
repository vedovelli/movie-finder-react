
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import App from './components/App'
import Movies from './components/MoviesContainer'

const markup = (
  <BrowserRouter>
    <App>
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
      <Route exact path="/movies" component={Movies} />
    </App>
  </BrowserRouter>
)

ReactDOM.render(markup, document.getElementById('app'))
