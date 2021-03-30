import React, { Component } from 'react'
import store from '../../redux/store.js'
import { increase, decrease, increaseAsync } from '../../redux/actions/count.js'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>结果为{store.getState()}</h1>
        <select ref={c => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increaseAsync}>异步+</button>
      </div>
    )
  }
  increase = () => {
    const { value } = this.selectNum
    store.dispatch(increase(value - 0))
  }
  decrease = () => {
    const { value } = this.selectNum
    store.dispatch(decrease(value - 0))
  }
  increaseAsync = () => {
    const { value } = this.selectNum
    store.dispatch(increaseAsync(value - 0, 1000))
  }
}
