
import PropTypes from 'prop-types'
import '../../css/styles.css'

const App = props => {
  return props.children
}

App.propTypes = {
  children: PropTypes.object
}

export default App
