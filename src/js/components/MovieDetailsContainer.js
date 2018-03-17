
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withErrorHandler from './Error'
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
    const { id } = this.props.match.params
    fetchMovie(id)
      .then(res => this.setState({ movie: res.data }))
      .catch(() => this.props.errorHandler(`Error fetching movie with the ID of ${id}`))
  }

  //
  render() {
    const { movie:m } = this.state
    const { history: { goBack } } = this.props
    const src = `${POSTER_BASE_URL}${m.poster_path}`
    return (
      m.original_title != null &&
        <div>
          <h2>{m.original_title}</h2>
          {src != null && <img src={src} />}
          <p>
            <a href="#" onClick={() => goBack()}>Back</a>
          </p>
        </div>
    )
  }
}

MovieDetailsContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  errorHandler: PropTypes.func
}

export default withErrorHandler(MovieDetailsContainer)
