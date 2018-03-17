
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { POSTER_BASE_URL } from '../service/movie-api'

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withCover: [],
      withoutCover: []
    }
  }

  //
  render() {
    return (
      <div className="row">
        {
          this.props.movies.map(movie => {
            const styles = {
              backgroundImage: `url(${POSTER_BASE_URL}${movie.poster_path})`
            }
            return (
              <div className="col-md-4" key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <div className="panel panel-default panel-no-border">
                    <div className="panel-body movie-card" style={styles}></div>
                    <p className="text-center">click to see movie info</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList
