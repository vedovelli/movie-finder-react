
import React, { Component } from 'react'

const withErrorHandler = (ReceivedComponent) => {
  const errorHandler = errorMessage => {
    alert(errorMessage)
  }
  
  class HigherOrderComponent extends Component {
    render() {
      return (
        <ReceivedComponent
          errorHandler={errorHandler}
          {...this.props} />
      )
    }
  }
  return HigherOrderComponent
}

export default withErrorHandler
