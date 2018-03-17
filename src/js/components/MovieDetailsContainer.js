
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { fetchMovie } from '../service/movie-api'

class MovieDetailsContainer extends Component {
  //
  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  //
  componentDidMount() {
    fetchMovie(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data }))
      .catch(error => {
        /*
        * TODO: error handler
        */
        window.console.log(error) // eslint-disble-line no-console
      })
  }

  //
  render() {
    const { movie:m } = this.state
    return (
      <div>
        <h2>{m.original_title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} />
      </div>
    )
  }
}

MovieDetailsContainer.propTypes = {
  match: PropTypes.object
}

export default MovieDetailsContainer
