
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { fetchMovie, POSTER_BASE_URL } from '../service/movie-api'

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
    const src = `${POSTER_BASE_URL}${m.poster_path}`
    return (
      m.original_title != null &&
        <div>
          <h2>{m.original_title}</h2>
          {src != null && <img src={src} />}
        </div>
    )
  }
}

MovieDetailsContainer.propTypes = {
  match: PropTypes.object
}

export default MovieDetailsContainer
