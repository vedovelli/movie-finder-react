
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const withErrorHandler = (ReceivedComponent) => {
  const errorHandler = errorMessage => {
    toast.error(errorMessage, {
      position: toast.POSITION.TOP_CENTER
    })
  }
  
  class ErrorHandlerHOC extends Component {
    render() {
      return (
        <div>
          <ToastContainer />
          <ReceivedComponent
            errorHandler={errorHandler}
            {...this.props} />
        </div>
      )
    }
  }
  return ErrorHandlerHOC
}

export default withErrorHandler
