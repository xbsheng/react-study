import { INCREASE, DECREASE } from '../constant'

const initState = 0
const reducer = (state = initState, { type, data }) => {
  switch (type) {
    case INCREASE:
      return state + data
    case DECREASE:
      return state - data
    default:
      return state
  }
}
export default reducer
