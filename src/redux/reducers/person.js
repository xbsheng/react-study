import { ADD_PERSON } from '../constant'

const initState = []
const reducer = (state = initState, { type, data }) => {
  switch (type) {
    case ADD_PERSON:
      // state.push(data)
      // console.log(state)
      // return state
      return [...state, data] // 不能使用上述的方法，上述的方法state(引用地址)没变，不会进行页面更新
    default:
      return state
  }
}

export default reducer
