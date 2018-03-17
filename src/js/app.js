
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from './components/App'
import Movies from './components/MoviesContainer'
import MovieDetails from './components/MovieDetailsContainer'

const markup = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
    </App>
  </BrowserRouter>
)

ReactDOM.render(markup, document.getElementById('app'))
