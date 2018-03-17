
import React from 'react'
import PropTypes from 'prop-types'

const MovieInputForm = props => {
  return (
    <form className="well" action="#" onSubmit={props.submitHandler}>
      <label htmlFor="search-input" className="control-label">Type a movie name and hit enter</label>
      <input
        id="search-input"
        className="form-control input-lg"
        type="search"
        value={props.searchTerm}
        onChange={props.changeHandler}
        autoFocus="autoFocus"/>
    </form>
  )
}

MovieInputForm.propTypes = {
  searchTerm: PropTypes.string,
  submitHandler: PropTypes.func,
  changeHandler: PropTypes.func
}

export default MovieInputForm
