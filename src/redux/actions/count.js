import { INCREASE, DECREASE } from '../constant'

export const increase = data => ({ type: INCREASE, data })
export const decrease = data => ({ type: DECREASE, data })

export const increaseAsync = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increase(data))
    }, time)
  }
}
