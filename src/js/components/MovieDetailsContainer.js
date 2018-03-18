
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withErrorHandler from '../hoc/ErrorHandler'
import { fetchMovie, POSTER_BASE_URL, BACKDROP_BASE_URL } from '../service/movie-api'

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
    const { history: { goBack } } = this.props
    const { movie } = this.state
    const hasMovie = Object.keys(movie).length > 0
    if (!hasMovie) return ''
    const data = formatMovieData(movie)

    addBackdrop(movie)

    return (
      <div>
        <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand">{movie.tagline}</span>
          </div>
        </nav>
        {hasMovie && <div className="container container-details">
          <div className="row">
            {movie.poster_path != null && <div className="col-md-3">
              {data.imgSrc != null && <img src={data.imgSrc} />}
            </div>}
            <div className="col-md-9">
              <h2>{data.original_title}</h2>
              <p className="lead">{movie.overview}</p>
              <p><strong>Genres:</strong> {data.genres}</p>
              <p><strong>Release Date:</strong> {data.release_date}</p>
              <p><strong>Popularity:</strong> {data.popularity} ({data.votes} votes)</p>
              {data.website && <p><strong>Website:</strong> <a href={data.website}>{data.website}</a></p>}
              <button className="btn btn-default btn-xs" onClick={() => goBack()}>back</button>
            </div>
          </div>
        </div>}  
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

const formatMovieData = movie => ({
  genres: movie.genres.map(genre => genre.name).join(', '),
  imgSrc: `${POSTER_BASE_URL}${movie.poster_path}`,
  original_title: movie.original_title,
  popularity: movie.vote_average,
  votes: movie.vote_count,
  website: movie.homepage,
  release_date: movie.release_date.split('-').reverse().join('/')
})

const markup = document.getElementsByTagName('head')[0].innerHTML
const addBackdrop = movie => {
  document.getElementsByTagName('head')[0].innerHTML = markup + `
    <style>
      .container-details::before {
        background-image: url(${BACKDROP_BASE_URL}${movie.backdrop_path})
      }
    </style>`
}
