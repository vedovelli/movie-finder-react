
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withErrorHandler from '../hoc/ErrorHandler'
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
    const hasMovie = Object.keys(m).length > 0
    const { history: { goBack } } = this.props
    const src = `${POSTER_BASE_URL}${m.poster_path}`
    return (
      hasMovie &&
        <div>
          <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <span className="navbar-brand">Movie Details</span>
            </div>
          </nav>
          <div className="container">
            <h3>{m.original_title}</h3>
            {src != null && <img src={src} />}
            <p>
              <a href="#" onClick={() => goBack()}>Back</a>
            </p>
          </div>
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
