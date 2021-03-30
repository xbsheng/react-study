import { connect } from 'react-redux'
import CountUI from '../components'
import { increase, decrease, increaseAsync } from '../../../redux/count_action.js'

const mapStateToProps = state => ({ count: state })
const mapDispatchToProps = dispatch => {
  return {
    increase: data => dispatch(increase(data)),
    decrease: data => dispatch(decrease(data)),
    increaseAsync: (data, time) => dispatch(increaseAsync(data, time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
