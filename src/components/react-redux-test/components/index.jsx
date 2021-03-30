import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>结果为{this.props.count}</h1>
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
    const { increase } = this.props
    increase(value)
  }
  decrease = () => {
    const { value } = this.selectNum
    const { decrease } = this.props
    decrease(value)
  }
  increaseAsync = () => {
    const { value } = this.selectNum
    const { increaseAsync } = this.props
    increaseAsync(value, 500)
  }
}
