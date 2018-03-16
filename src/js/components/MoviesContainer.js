
import React, { Component } from 'react'
import http from '../service/http'

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    http.http.get(`search/movie?api_key=${http.key}&query=pulp+fiction`).then(res => window.console.log(res))
  }
  render() {
    return (
      <h1>Hello from MoviesContainer</h1>
    )
  }
}

export default MoviesContainer
