
import React from 'react'
import PropTypes from 'prop-types'

const MovieInputForm = props => {
  return (
    <form action="#" onSubmit={props.submitHandler}>
      <input
        type="search"
        value={props.searchTerm}
        onChange={props.changeHandler}
        placeholder="Type something and hit enter" />
    </form>
  )
}

MovieInputForm.propTypes = {
  searchTerm: PropTypes.string,
  submitHandler: PropTypes.func,
  changeHandler: PropTypes.func
}

export default MovieInputForm
